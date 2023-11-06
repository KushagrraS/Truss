import { useState, useEffect } from "react";

export const useVisibleCardCount = ({
  containerSelector,
  cardSelector,
  cardCount = 4,
}) => {
  const [visibleCardCount, setVisibleCardCount] = useState(cardCount);

  useEffect(() => {
    const calculateVisibleCards = () => {
      const container = document.querySelector(containerSelector);
      const card = document.querySelector(cardSelector);

      if (container && card) {
        const containerWidth = container.clientWidth;
        const cardWidth = card.clientWidth;

        const newVisibleCardCount = Math.floor(containerWidth / cardWidth);
        setVisibleCardCount(newVisibleCardCount + 1);
      }
    };

    // Calculate and set the initial value
    calculateVisibleCards();

    // Listen for window resize events to update visible cards
    window.addEventListener("resize", calculateVisibleCards);

    // Clean up event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", calculateVisibleCards);
    };
  }, [containerSelector, cardSelector]);

  return visibleCardCount;
};
