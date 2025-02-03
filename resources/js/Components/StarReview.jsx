import { Star } from 'lucide-react';
import React from 'react'

export default function StarReview({ review = 0 }) {
    return (
        <>
            {[...Array(5)].map((_, index) => {
                const wholePart = Math.floor(review);
                const decimalPart = review % 1;
                const fillWidth = decimalPart * 100;

                return (
                    <div key={index} className="relative stroke-transparent h-2 w-2 sm:h-3 sm:w-3">
                        <Star className="absolute top-0 left-0 stroke-transparent h-2 w-2 sm:h-3 sm:w-3 fill-gray-300" />
                        {index < wholePart && (
                            <Star className="absolute top-0 left-0 stroke-transparent h-2 w-2 sm:h-3 sm:w-3 fill-yellow-400" />
                        )}

                        {index === wholePart && decimalPart > 0 && (
                            <div
                                className="absolute top-0 left-0 overflow-hidden"
                                style={{ width: `${fillWidth}%` }} >
                                <Star className="stroke-transparent h-2 w-2 sm:h-3 sm:w-3 fill-yellow-400" />
                            </div>
                        )}
                    </div>
                );
            })}
        </>
    )
}
