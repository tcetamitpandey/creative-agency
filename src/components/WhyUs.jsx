import { useState, useRef, useEffect } from 'react';
import '../style/whyUs.css';

const whyUsCards = [
  {
    id: 1,
    title: "WE ARE ALWAYS NEW",
    description: "WE ARE ALWAYS READY TO UNDERSTAND YOUR NEEDS AND COME UP WITH A QUICK AND EFFECTIVE SOLUTION",
    color: "#a8d5ff",
    textColor: "#000",
    position: { x: 50, y: 100 },
    rotation: -2,
    zIndex: 1
  },
  {
    id: 2,
    title: "WE CREATE WORLDLY",
    description: "OUR CREATIVES TRANSCEND BOUNDARIES AND SPEAK A UNIVERSAL LANGUAGE OF EXCELLENCE",
    color: "#ffb3d9",
    textColor: "#fff",
    position: { x: 250, y: 50 },
    rotation: 3,
    zIndex: 2
  },
  {
    id: 3,
    title: "WE ARE PLAYING THE LONG GAME",
    description: "OUR CLIENTS STAY WITH US, CONTINUING TO GROW THEIR BUSINESSES FOR YEARS",
    color: "#ffb3d9",
    textColor: "#fff",
    position: { x: 500, y: 150 },
    rotation: -1.5,
    zIndex: 3
  },
  {
    id: 4,
    title: "WE ARE FOR A COMPREHENSIVE APPROACH",
    description: "WE SELECT THE OPTIMAL SET OF SERVICES SPECIFICALLY FOR YOUR NEEDS TO DELIVER MAXIMUM RESULTS IN A SHORT TIME",
    color: "#a8d5ff",
    textColor: "#000",
    position: { x: 100, y: 350 },
    rotation: 2.5,
    zIndex: 4
  },
  {
    id: 5,
    title: "COOPERATIVE",
    description: "WE WORK AS AN EXTENSION OF YOUR TEAM, ENSURING SEAMLESS COLLABORATION",
    color: "#fff",
    textColor: "#000",
    position: { x: 350, y: 300 },
    rotation: -3,
    zIndex: 5,
    isPolaroid: true,
    imageUrl: "https://picsum.photos/300/400?random=10"
  },
  {
    id: 6,
    title: "PICNIC",
    description: "WE BELIEVE IN BUILDING RELATIONSHIPS THAT GO BEYOND BUSINESS",
    color: "#fff",
    textColor: "#000",
    position: { x: 600, y: 250 },
    rotation: 1.5,
    zIndex: 6,
    isPolaroid: true,
    imageUrl: "https://picsum.photos/300/400?random=11"
  }
];

export default function WhyUs() {
  const [cards, setCards] = useState(whyUsCards);
  const [draggedCard, setDraggedCard] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseDown = (e, cardId) => {
    e.preventDefault();
    e.stopPropagation();
    
    const card = cards.find(c => c.id === cardId);
    if (!card || !containerRef.current) return;

    const cardRect = e.currentTarget.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    
    setDragOffset({
      x: e.clientX - cardRect.left,
      y: e.clientY - cardRect.top
    });
    
    setDraggedCard(cardId);
  };

  const handleMouseMove = (e) => {
    if (!draggedCard || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const cardWidth = 320;
    const cardHeight = 200;
    const newX = e.clientX - containerRect.left - dragOffset.x;
    const newY = e.clientY - containerRect.top - dragOffset.y;

    setCards(prevCards =>
      prevCards.map(card =>
        card.id === draggedCard
          ? {
              ...card,
              position: {
                x: Math.max(-cardWidth * 0.2, Math.min(newX, containerRect.width - cardWidth * 0.8)),
                y: Math.max(-cardHeight * 0.2, Math.min(newY, containerRect.height - cardHeight * 0.8))
              },
              zIndex: 1000
            }
          : card
      )
    );
  };

  const handleMouseUp = () => {
    if (draggedCard) {
      setCards(prevCards =>
        prevCards.map(card =>
          card.id === draggedCard
            ? { ...card, zIndex: Math.max(...prevCards.map(c => c.zIndex)) + 1 }
            : card
        )
      );
    }
    setDraggedCard(null);
  };

  useEffect(() => {
    if (draggedCard) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [draggedCard, dragOffset]);

  return (
    <div className="why-us-container" ref={containerRef}>
      <div className="why-us-title">WHY WE ARE LOVED</div>
      <div className="why-us-cards-wrapper">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`why-us-card ${card.isPolaroid ? 'polaroid' : ''} ${draggedCard === card.id ? 'dragging' : ''}`}
            style={{
              backgroundColor: card.color,
              color: card.textColor,
              left: `${card.position.x}px`,
              top: `${card.position.y}px`,
              transform: `rotate(${card.rotation}deg)`,
              zIndex: card.zIndex,
              cursor: draggedCard === card.id ? 'grabbing' : 'grab'
            }}
            onMouseDown={(e) => handleMouseDown(e, card.id)}
          >
            {card.isPolaroid ? (
              <>
                <div className="polaroid-image">
                  <img src={card.imageUrl} alt={card.title} />
                  <span className="drag-label">DRAG</span>
                </div>
                <div className="polaroid-footer">
                  <span className="polaroid-title">{card.title}</span>
                  <span className="polaroid-date">08.0724</span>
                  <div className="polaroid-pattern"></div>
                </div>
              </>
            ) : (
              <>
                <h3 className="card-title">{card.title}</h3>
                <p className="card-description">{card.description}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

