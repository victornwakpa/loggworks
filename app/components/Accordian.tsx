"use client";
import { ChevronDown } from "lucide-react";
import React from "react";
import { PropsWithChildren } from 'react';
import { useEffect, useState, createContext, ReactNode, useContext, useRef } from "react";

interface AccordianProps {
    children: ReactNode;
    value: any;
    onChange?: (value: any) => void;
    className?: string;
}

interface AccordianItemProps {
    children: ReactNode;
    value: any;
    trigger: ReactNode;
}

const AccordianContext = createContext<{ selected: any, setSelected: React.Dispatch<React.SetStateAction<any>> }>({
    selected: null,
    setSelected: () => {}
});

const Accordion: React.FC<AccordianProps> = ({ children, value, onChange, ...props }: AccordianProps) => {
    const [selected, setSelected] = useState(value);

    useEffect(() => {
        onChange?.(selected)
    }, [selected])

    // useEffect(() => {
    //     // Set the selected state to the value of the last AccordionItem
    //     const lastItemValue = React.Children.toArray(children).slice(-1)[0].props.value;
    //     setSelected(lastItemValue);
    // }, [children]);

    useEffect(() => {
        // Set the selected state to the value of the last AccordionItem
        React.Children.forEach(children, (child) => {
            if (React.isValidElement(child)) {
                setSelected(child.props.value);
            }
        });
    }, [children]);

    // useEffect(() => {
    //     // Set the selected state to the value of the last AccordionItem
    //     const lastItemValue = React.Children.toArray(children).slice(-1)[0]?.props.value;
    //     setSelected(lastItemValue);
    // }, [children]);

    return (
        <ul {...props}>
            <AccordianContext.Provider value={{ selected, setSelected }}>
                {children}
            </AccordianContext.Provider>
        </ul>
    )
}

export function AccordianItem({ children, value, trigger, ...props }: AccordianItemProps) {
    const { selected, setSelected } = useContext(AccordianContext);
    const open = selected === value;
    const ref = useRef<HTMLDivElement>(null);

    return (
        <li className="" {...props}>
            <header role="button" onClick={() => setSelected(open ? null : value)}
            className="flex justify-between text-white items-center py-4 font-semibold text-[18px]">
                {trigger}
                <ChevronDown size={16} className={`transition-transform ${open ? "rotate-180" : ""}`} />
            </header>
            <div className="overflow-y-hidden transition-all" style={{height:open ? ref.current?.offsetHeight || 0 : 0}}>
                <div className="pb-4" ref={ref}>{children}</div>
            </div>
        </li>
    )
}

export default Accordion;