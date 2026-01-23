function processAndCombineString(strings, lengthThreshold) {
  // 1) แปลงทุกคำให้เป็นตัวพิมพ์ใหญ่ (ได้ array ใหม่)
  const uppercaseStrings = strings.map(item => {
    return item.toUpperCase(); // แปลงคำปัจจุบันเป็น UPPERCASE แล้วส่งกลับไปใส่ใน array ใหม่
  });

  // 2) กรองเฉพาะคำที่มีความยาว >= lengthThreshold
  const filteredStrings = uppercaseStrings.filter(item => {
    return item.length >= lengthThreshold; // true = เก็บไว้, false = ทิ้ง
  });

  // 3) นับสระของแต่ละคำ (A,E,I,O,U) แล้วเก็บเป็นตัวเลขใน array
  const countVowels = filteredStrings.map(word => {
    let count = 0; // ตัวนับสระของคำนี้ (ต้องใช้ let เพราะจะเพิ่มค่า)

    // วนทีละตัวอักษรในคำ เช่น "APPLE" จะได้ 'A','P','P','L','E'
    for (const char of word) {
      // เช็คว่าตัวอักษรนี้อยู่ในชุดสระไหม
      if ("AEIOU".includes(char)) {
        count++; // ถ้าเป็นสระ เพิ่มตัวนับ
      }
    }

    return count; // ส่งจำนวนสระของคำนี้กลับไปเก็บใน array countVowels
  });

  // 4) รวมคำกับจำนวนสระให้เป็น “คู่ข้อมูล” เพื่อใช้ sort ได้ง่าย
  const combined = filteredStrings.map((word, index) => {
    return {
      word: word,              // เก็บคำ
      vowels: countVowels[index] // เก็บจำนวนสระที่ตำแหน่งเดียวกัน
    };
  });

  // 5) จัดเรียง: สระมาก -> น้อย, ถ้าเท่ากันเรียงคำ A -> Z
  const sortedStrings = combined.sort((a, b) => {
    if (a.vowels !== b.vowels) {
      return b.vowels - a.vowels; // vowels มากกว่าให้อยู่ก่อน
    } else {
      return a.word.localeCompare(b.word); // vowels เท่ากัน -> เรียงตามตัวอักษร
    }
  });

  // 6) ดึงเฉพาะคำออกมา (จาก object -> string)
  const result = sortedStrings.map(item => item.word);

  // 7) รวมคำเป็นสตริงเดียวด้วยช่องว่าง แล้วคืนค่า
  return result.join(" ");
}
