import React from 'react'
import { WordRotate } from '@/components/ui/word-rotate';

const WordShowHidden = ({ words }) => {
    return (
        <div className="">
            <WordRotate
                words={words}
                animationStyle="fade"
                className="text-3xl font-semibold text-[#C7A964]"
                duration={1200}
                pauseDuration={500}
                loop={true}
            />
        </div>
    );
}

export default WordShowHidden