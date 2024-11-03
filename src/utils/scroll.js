export const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const getPosition = (id) => {
  const element = document.getElementById(id);
  if (element) {
    const rect = element.getBoundingClientRect();
    const yPosition = rect.top + window.scrollY; // Calculate Y position relative to the document
    return yPosition;
  } else {
    return null;
  }
};
