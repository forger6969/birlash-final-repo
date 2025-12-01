// MorphingDialog.tsx
'use client';

import React, { useContext, useEffect, useId, useMemo, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence, MotionConfig } from 'motion/react';
import { createPortal } from 'react-dom';
import { cn } from '@/lib/utils';
import { XIcon } from 'lucide-react';
import useClickOutside from './useClickOutside';

// Контекст
const MorphingDialogContext = React.createContext(null);

export function useMorphingDialog() {
    const context = useContext(MorphingDialogContext);
    if (!context) throw new Error('useMorphingDialog must be used inside MorphingDialogProvider');
    return context;
}

// Провайдер
export function MorphingDialogProvider({ children, transition }) {
    const [isOpen, setIsOpen] = useState(false);
    const uniqueId = useId();
    const triggerRef = useRef(null);

    const contextValue = useMemo(() => ({ isOpen, setIsOpen, uniqueId, triggerRef }), [isOpen, uniqueId]);

    return (
        <MorphingDialogContext.Provider value={contextValue}>
            <MotionConfig transition={transition}>{children}</MotionConfig>
        </MorphingDialogContext.Provider>
    );
}

// Диалог
export function MorphingDialog({ children, transition }) {
    return <MorphingDialogProvider transition={transition}>{children}</MorphingDialogProvider>;
}

// Триггер
export function MorphingDialogTrigger({ children, className, style }) {
    const { setIsOpen, isOpen, uniqueId, triggerRef } = useMorphingDialog();

    return (
        <motion.button
            ref={triggerRef}
            layoutId={`dialog-${uniqueId}`}
            className={cn('relative cursor-pointer', className)}
            style={style}
            onClick={() => setIsOpen(!isOpen)}
        >
            {children}
        </motion.button>
    );
}

// Контейнер для портала
export function MorphingDialogContainer({ children }) {
    const { isOpen, uniqueId } = useMorphingDialog();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        key={`backdrop-${uniqueId}`}
                        className="fixed inset-0 bg-black/40 backdrop-blur-xs"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />
                    <div className="fixed inset-0 z-50 flex items-center justify-center">{children}</div>
                </>
            )}
        </AnimatePresence>,
        document.body
    );
}

// Контент
export function MorphingDialogContent({ children, className, style }) {
    const { setIsOpen, triggerRef } = useMorphingDialog();
    const containerRef = useRef(null);

    useClickOutside(containerRef, () => setIsOpen(false));

    return (
        <motion.div
            ref={containerRef}
            className={cn('overflow-hidden', className)}
            style={style}
        >
            {children}
        </motion.div>
    );
}

// Закрытие
export function MorphingDialogClose({ children, className }) {
    const { setIsOpen } = useMorphingDialog();
    return (
        <motion.button
            onClick={() => setIsOpen(false)}
            className={cn('absolute top-6 right-6', className)}
        >
            {children || <XIcon size={24} />}
        </motion.button>
    );
}

// Остальные элементы (Title, Subtitle, Image) остаются как есть
export const MorphingDialogTitle = ({ children, className }) => {
    const { uniqueId } = useMorphingDialog();
    return (
        <motion.div layoutId={`dialog-title-container-${uniqueId}`} className={className}>
            {children}
        </motion.div>
    );
};

export const MorphingDialogSubtitle = ({ children, className }) => {
    const { uniqueId } = useMorphingDialog();
    return (
        <motion.div layoutId={`dialog-subtitle-container-${uniqueId}`} className={className}>
            {children}
        </motion.div>
    );
};

export const MorphingDialogImage = ({ src, alt, className }) => {
    const { uniqueId } = useMorphingDialog();
    return <motion.img layoutId={`dialog-img-${uniqueId}`} src={src} alt={alt} className={cn(className)} />;
};
