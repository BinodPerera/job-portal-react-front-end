import React, { useRef } from "react";

const items = [
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
  "Item 6",
  "Item 7",
  "Item 8",
  "Item 9",
  "Item 10",
];

// const SCROLL_AMOUNT = 150; // pixels to scroll on each button click

const HorizontalScrollList = () => {
  const containerRef = useRef(null);

  // const scrollLeft = () => {
  //   if (containerRef.current) {
  //     containerRef.current.scrollBy({
  //       left: -SCROLL_AMOUNT,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  // const scrollRight = () => {
  //   if (containerRef.current) {
  //     containerRef.current.scrollBy({
  //       left: SCROLL_AMOUNT,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {/* <button onClick={scrollLeft} style={styles.button}>
        &#8592;
      </button> */}
      <div ref={containerRef} style={styles.container}>
        {items.map((item, index) => (
          <div key={index} style={styles.item}>
            {item}
          </div>
        ))}
      </div>
      {/* <button onClick={scrollRight} style={styles.button}>
        &#8594;
      </button> */}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    overflowX: "auto",
    whiteSpace: "nowrap",
    paddingBottom: "20px",
    border: "none",
    maxWidth: "80vw",
    scrollBehavior: "smooth",
    margin: "0 auto",
    scrollbarWidth: "none", // Hide scrollbar
  },
  item: {
    flex: "0 0 auto",
    backgroundColor: "#007bff",
    color: "white",
    padding: "20px",
    marginRight: "10px",
    borderRadius: "8px",
    minWidth: "120px",
    textAlign: "center",
    userSelect: "none",
  },
  button: {
    cursor: "pointer",
    fontSize: "24px",
    padding: "10px 15px",
    margin: "0 5px",
    borderRadius: "50px",
    border: "none",
    backgroundColor: "#f0f0f0",
    color: "brown",
    boxShadow: "2px 2px 2px rgba(0,0,0,0.1)",
    transition: "background-color 0.3s, color 0.3s",
  },
};

export default HorizontalScrollList;
