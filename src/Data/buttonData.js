export const buttonData = ["men's clothing", "jewelery","electronics","women's clothing"];
if (typeof window !== 'undefined') {
    // Perform localStorage action
    // const item = localStorage.getItem('key')
    localStorage.setItem("buttonData", JSON.stringify(buttonData));
  }
