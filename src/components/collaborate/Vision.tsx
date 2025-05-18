import React, { useState, useEffect, useRef } from 'react';
import { Lightbulb, FileSignature, Rocket, Banknote, Gauge, Brain } from 'lucide-react';

const Vision = () => {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const svgRef = useRef<SVGSVGElement>(null);
    const pageContainerRef = useRef<HTMLDivElement>(null);

    const triggerData = [
        { id: 'idea', icon: Lightbulb, title: 'Description of Idea', subtitle: 'Defining the vision and initial scope.',
            dropdownTitle: 'Idea Exploration',
            items: [
                { strong: 'What is the goal?', text: "A quick summary of the problem or opportunity." },
                { strong: 'Our approach:', text: "How we plan to solve it." },
                { strong: 'Who benefits?', text: "Who will use or gain from this?" },
            ]
        },
        { id: 'plan', icon: FileSignature, title: 'Agreement & Plan', subtitle: 'Structuring the project for successful execution.',
            dropdownTitle: 'Project Blueprint & Execution',
            items: [
                { strong: 'What we deliver:', text: "A clear list of what we'll build." },
                { strong: 'Timeline:', text: "Key dates and milestones." },
                { strong: 'Team & updates:', text: "Who's involved and how we'll keep you posted." },
            ]
        },
    ];

    const resultData = [
        { id: 'mvp', icon: Rocket, title: 'Initial Product & Results', subtitle: 'Delivering tangible outcomes & validated learning.',
            dropdownTitle: 'Product Delivery',
            items: [
                { strong: 'First version:', text: "Core product ready for use and feedback." },
                { strong: "What's included:", text: "Main features in this release." },
                { strong: 'Next steps:', text: "How we'll improve from here." },
            ]
        },
        { id: 'cash', icon: Banknote, title: 'Cash Results', subtitle: 'Agreed for met targets',
            dropdownTitle: 'Business Impact',
            items: [
                { strong: 'Value delivered:', text: "What you gain from the project." },
                { strong: 'Targets met:', text: "Did we hit our goals?" },
                { strong: 'Growth & savings:', text: "Revenue, growth, or cost savings." },
            ]
        },
    ];

    const handleTriggerClick = (id: string) => {
        setOpenDropdown(prev => (prev === id ? null : id));
    };

    const getElementConnectionPoint = (elementId: string, side = 'right', verticalPercentage = 0.5) => {
        const element = document.getElementById(elementId);
        if (!element || !pageContainerRef.current) return null;
        const rect = element.getBoundingClientRect();
        const pageRect = pageContainerRef.current.getBoundingClientRect();

        const xOffset = rect.left - pageRect.left;
        const yOffset = rect.top - pageRect.top;

        let x;
        const y = yOffset + rect.height * verticalPercentage;

        if (side === 'right') x = xOffset + rect.width;
        else if (side === 'left') x = xOffset;
        else x = xOffset + rect.width / 2; // center
        return { x, y };
    };

    const createSvgPath = (startPoint: {x: number, y: number} | null, endPoint: {x: number, y: number} | null, id: string) => {
        if (!startPoint || !endPoint) return null;
        const { x: x1, y: y1 } = startPoint;
        const { x: x2, y: y2 } = endPoint;
        const horizontalOffset = Math.max(50, Math.abs(x2 - x1) * 0.2);
        const cp1x = x1 + horizontalOffset;
        const cp1y = y1;
        const cp2x = x2 - horizontalOffset;
        const cp2y = y2;
        const d = `M ${x1} ${y1} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${x2} ${y2}`;
        return <path key={id} id={id} className="interactive-flow-line-path" d={d} stroke="url(#pulse-gradient)" />;
    };

    // Click outside to close dropdown
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (openDropdown) {
                const dropdownElement = document.getElementById(openDropdown + 'Dropdown');
                const triggerElement = document.getElementById(openDropdown + 'Trigger');
                if (
                    dropdownElement && !dropdownElement.contains(event.target as Node) &&
                    triggerElement && !triggerElement.contains(event.target as Node)
                ) {
                    setOpenDropdown(null);
                }
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [openDropdown]);

    const [svgPaths, setSvgPaths] = useState<JSX.Element[]>([]);
    const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null); // Ref for the dropdown change timeout

    useEffect(() => {
        const drawAndSetFlowLines = () => {
            if (!svgRef.current || !pageContainerRef.current) return;
            
            const connections = [
                { sId: 'ideaTrigger', tId: 'centerDisplay', sSide: 'right', tSide: 'left', sV: 0.35, tV: 0.35, id: 'line-idea-center' },
                { sId: 'planTrigger', tId: 'centerDisplay', sSide: 'right', tSide: 'left', sV: 0.65, tV: 0.65, id: 'line-plan-center' },
                { sId: 'centerDisplay', tId: 'mvpTrigger', sSide: 'right', tSide: 'left', sV: 0.35, tV: 0.35, id: 'line-center-mvp' },
                { sId: 'centerDisplay', tId: 'cashTrigger', sSide: 'right', tSide: 'left', sV: 0.65, tV: 0.65, id: 'line-center-cash' }
            ];
            
            const paths: JSX.Element[] = [];
            connections.forEach(conn => {
                const start = getElementConnectionPoint(conn.sId, conn.sSide, conn.sV);
                const end = getElementConnectionPoint(conn.tId, conn.tSide, conn.tV);
                const pathElement = createSvgPath(start, end, conn.id);
                if (pathElement) paths.push(pathElement);
            });
            setSvgPaths(paths);
        };

        let resizeTimer: NodeJS.Timeout;
        const debouncedDrawLines = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(drawAndSetFlowLines, 250);
        };

        // Initial draw and setup for resize
        const initialDrawTimeout = setTimeout(drawAndSetFlowLines, 100); // Initial draw
        window.addEventListener('resize', debouncedDrawLines);
        
        // Handle redrawing when a dropdown opens or closes
        if (dropdownTimeoutRef.current) {
            clearTimeout(dropdownTimeoutRef.current); // Clear any existing timeout
        }
        // The 610ms timeout is likely to wait for dropdown animation (0.6s in your CSS)
        dropdownTimeoutRef.current = setTimeout(drawAndSetFlowLines, 610); 

        return () => {
            clearTimeout(initialDrawTimeout);
            clearTimeout(resizeTimer);
            window.removeEventListener('resize', debouncedDrawLines);
            if (dropdownTimeoutRef.current) {
                clearTimeout(dropdownTimeoutRef.current);
            }
        };
    }, [openDropdown]); // Keep openDropdown as a dependency to react to its changes

    return (
        <section className="py-20 bg-white"> 
            <div ref={pageContainerRef} className="interactive-flow-page-container">
                <div className="text-center mb-12 sm:mb-16">
                    <h1 className="text-4xl sm:text-5xl font-bold text-[#414b53] mb-3">Our Integrated Workflow</h1>
                    <p className="text-[#919da0] text-lg sm:text-xl">From concept to cash, powered by intelligent systems.</p>
                </div>
            
                <svg id="interactive-flow-lines-svg" ref={svgRef}>
                    <defs>
                        <linearGradient id="pulse-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#6c7a86">
                                <animate attributeName="offset" values="0;1" dur="4s" repeatCount="indefinite" />
                            </stop>
                            <stop offset="50%" stopColor="#d4d3c8">
                                <animate attributeName="offset" values="0.5;1.5" dur="4s" repeatCount="indefinite" />
                            </stop>
                            <stop offset="100%" stopColor="#6c7a86">
                                <animate attributeName="offset" values="1;2" dur="4s" repeatCount="indefinite" />
                            </stop>
                        </linearGradient>
                    </defs>
                    {svgPaths}
                </svg>

                <div className="interactive-flow-container">
                    <div className="interactive-flow-column">
                        {triggerData.map((item, idx) => (
                            <div key={item.id} className="interactive-flow-item-wrapper">
                                <div id={`${item.id}Trigger`} className="interactive-flow-trigger-box" data-idx={idx} style={{ '--pulse-delay': `${idx * 0.7}s` } as React.CSSProperties} onClick={() => handleTriggerClick(item.id)}>
                                    <item.icon className="icon-trigger" />
                                    <div>
                                        <h3>{item.title}</h3>
                                        <p>{item.subtitle}</p>
                                    </div>
                                </div>
                                <div id={`${item.id}Dropdown`} className={`interactive-flow-dropdown-content ${openDropdown === item.id ? 'show' : ''}`}>
                                    <div className="interactive-flow-dropdown-inner-content">
                                        <h4 className="interactive-flow-dropdown-title">{item.dropdownTitle}</h4>
                                        {item.items.map((detail, index) => (
                                            <p key={index} className="interactive-flow-dropdown-item">
                                                <strong>{detail.strong}</strong> {detail.text}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="interactive-flow-column center-column">
                        <div id="centerDisplay" className="interactive-flow-center-display" data-idx={2} style={{ '--pulse-delay': `${2 * 0.7}s` } as React.CSSProperties}>
                            <div className="icons-wrapper">
                                <Gauge className="icon-center" />
                                <span className="icon-separator">+</span>
                                <Brain className="icon-center" />
                            </div>
                            <h3>DevDash & Intelligent Systems</h3>
                            <p>Centralized hub for real-time tracking, analytics, and AI-powered process optimization.</p>
                        </div>
                    </div>

                    <div className="interactive-flow-column">
                        {resultData.map((item, idx) => (
                            <div key={item.id} className="interactive-flow-item-wrapper">
                                <div id={`${item.id}Trigger`} className="interactive-flow-trigger-box interactive-flow-result-box" data-idx={idx + 3} style={{ '--pulse-delay': `${(idx + 3) * 0.7}s` } as React.CSSProperties} onClick={() => handleTriggerClick(item.id)}>
                                    <item.icon className="icon-trigger" />
                                    <div>
                                        <h3>{item.title}</h3>
                                        <p>{item.subtitle}</p>
                                    </div>
                                </div>
                                <div id={`${item.id}Dropdown`} className={`interactive-flow-dropdown-content ${openDropdown === item.id ? 'show' : ''}`}>
                                    <div className="interactive-flow-dropdown-inner-content">
                                        <h4 className="interactive-flow-dropdown-title">{item.dropdownTitle}</h4>
                                        {item.items.map((detail, index) => (
                                            <p key={index} className="interactive-flow-dropdown-item">
                                                <strong>{detail.strong}</strong> {detail.text}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Vision;
