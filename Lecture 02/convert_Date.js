const registerDate = new Date('2025-12-02T14:30:00');

const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric', 
    hour: '2-digit', 
    minute: '2-digit' 
};

const formattedDate = registerDate.toLocaleDateString('th-TH', options);
console.log(formattedDate);