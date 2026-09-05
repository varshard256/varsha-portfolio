const fs = require('fs');
const path = require('path');
const { PDFDocument, StandardFonts, rgb } = require('pdf-lib');

async function createResumePdf() {
  const pdfDoc = await PDFDocument.create();
  // Standard US Letter dimensions (612 x 792)
  const page = pdfDoc.addPage([612, 792]);
  const { width, height } = page.getSize();

  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  const marginX = 40;
  const contentWidth = width - 2 * marginX;
  let y = height - 36;

  const colorBlack = rgb(0.08, 0.08, 0.08);
  const colorGray = rgb(0.25, 0.25, 0.25);
  const colorRule = rgb(0.2, 0.2, 0.2);

  // Helper function to draw horizontal line
  function drawDivider(currentY) {
    page.drawLine({
      start: { x: marginX, y: currentY },
      end: { x: width - marginX, y: currentY },
      thickness: 0.65,
      color: colorRule,
    });
  }

  // Helper for section title
  function drawSectionHeader(title) {
    y -= 10;
    page.drawText(title, {
      x: marginX,
      y: y,
      size: 9.5,
      font: fontBold,
      color: colorBlack,
    });
    y -= 4;
    drawDivider(y);
    y -= 8;
  }

  // Helper to wrap and draw paragraph text
  function drawWrappedText(text, fontSize, font, color, lineHeight, indent = 0) {
    const maxWidth = contentWidth - indent;
    const words = text.split(' ');
    let line = '';

    for (let i = 0; i < words.length; i++) {
      const testLine = line + (line === '' ? '' : ' ') + words[i];
      const textWidth = font.widthOfTextAtSize(testLine, fontSize);
      if (textWidth > maxWidth && line !== '') {
        page.drawText(line, {
          x: marginX + indent,
          y: y,
          size: fontSize,
          font: font,
          color: color,
        });
        y -= lineHeight;
        line = words[i];
      } else {
        line = testLine;
      }
    }
    if (line !== '') {
      page.drawText(line, {
        x: marginX + indent,
        y: y,
        size: fontSize,
        font: font,
        color: color,
      });
      y -= lineHeight;
    }
  }

  // --- HEADER ---
  const name = 'VARSHA R D';
  const nameWidth = fontBold.widthOfTextAtSize(name, 17);
  page.drawText(name, {
    x: (width - nameWidth) / 2,
    y: y,
    size: 17,
    font: fontBold,
    color: colorBlack,
  });
  y -= 14;

  const contactLine = 'Bengaluru, Karnataka  |  +91-8497804622  |  varshard256@gmail.com  |  linkedin.com/in/varsha-r-d-5b8a71291  |  github.com/varshard256';
  const contactWidth = fontRegular.widthOfTextAtSize(contactLine, 8.5);
  page.drawText(contactLine, {
    x: (width - contactWidth) / 2,
    y: y,
    size: 8.5,
    font: fontRegular,
    color: colorGray,
  });
  y -= 12;

  // --- PROFESSIONAL SUMMARY ---
  drawSectionHeader('PROFESSIONAL SUMMARY');
  const summary = 'MCA graduate with hands-on Full Stack Development experience building web applications using React.js, Node.js, Express.js, and PostgreSQL. Skilled in developing RESTful APIs, authentication systems, and database-driven applications, with additional experience in Python, Flask, Data Science, and Machine Learning. Seeking an entry-level Software Developer or Full Stack Developer role.';
  drawWrappedText(summary, 8.25, fontRegular, colorBlack, 11);
  y -= 2;

  // --- TECHNICAL SKILLS ---
  drawSectionHeader('TECHNICAL SKILLS');

  const skills = [
    { label: 'Languages: ', value: 'Java, Python, C, JavaScript' },
    { label: 'Frontend: ', value: 'React.js, HTML, CSS' },
    { label: 'Backend: ', value: 'Node.js, Express.js, Flask, PHP, Django REST Framework' },
    { label: 'Databases: ', value: 'PostgreSQL, MySQL, MongoDB, SQLite' },
    { label: 'Data Science & Machine Learning: ', value: 'Pandas, NumPy, Scikit-learn, Matplotlib, Jupyter Notebook' },
    { label: 'Data Visualization: ', value: 'Tableau, Power BI, Advanced Excel' },
    { label: 'Tools & Concepts: ', value: 'Git, GitHub, REST APIs, JWT Authentication, XAMPP' },
  ];

  for (const item of skills) {
    const labelWidth = fontBold.widthOfTextAtSize(item.label, 8.2);
    page.drawText(item.label, {
      x: marginX,
      y: y,
      size: 8.2,
      font: fontBold,
      color: colorBlack,
    });
    page.drawText(item.value, {
      x: marginX + labelWidth,
      y: y,
      size: 8.2,
      font: fontRegular,
      color: colorBlack,
    });
    y -= 11;
  }
  y -= 2;

  // --- EXPERIENCE ---
  drawSectionHeader('EXPERIENCE');

  // Job 1
  page.drawText('Full Stack Developer Intern', {
    x: marginX,
    y: y,
    size: 8.5,
    font: fontBold,
    color: colorBlack,
  });
  const role1Width = fontBold.widthOfTextAtSize('Full Stack Developer Intern', 8.5);
  page.drawText(' — Web Digital Mantra IT Services', {
    x: marginX + role1Width,
    y: y,
    size: 8.5,
    font: fontBold,
    color: colorBlack,
  });
  const date1 = '|  May 2026 – July 2026';
  page.drawText(date1, {
    x: marginX + role1Width + fontBold.widthOfTextAtSize(' — Web Digital Mantra IT Services', 8.5) + 6,
    y: y,
    size: 8.5,
    font: fontRegular,
    color: colorGray,
  });
  y -= 11.5;

  const exp1Bullets = [
    'Developed responsive web applications using React.js for the frontend and Node.js with Express.js for the backend.',
    'Built and integrated RESTful APIs to enable communication between frontend and backend services.',
    'Integrated PostgreSQL to store and manage user data and application records.',
    'Implemented JWT-based authentication and role-based access control for secure application access.',
    'Debugged and tested application features to improve functionality and reliability.',
  ];

  for (const b of exp1Bullets) {
    page.drawText('•', { x: marginX + 4, y: y, size: 8, font: fontRegular, color: colorBlack });
    drawWrappedText(b, 8.1, fontRegular, colorBlack, 10.5, 14);
  }
  y -= 2;

  // Job 2
  page.drawText('Data Science Intern', {
    x: marginX,
    y: y,
    size: 8.5,
    font: fontBold,
    color: colorBlack,
  });
  const role2Width = fontBold.widthOfTextAtSize('Data Science Intern', 8.5);
  page.drawText(' — Skyllx Technologies Pvt Ltd', {
    x: marginX + role2Width,
    y: y,
    size: 8.5,
    font: fontBold,
    color: colorBlack,
  });
  const date2 = '|  January 2026 – May 2026';
  page.drawText(date2, {
    x: marginX + role2Width + fontBold.widthOfTextAtSize(' — Skyllx Technologies Pvt Ltd', 8.5) + 6,
    y: y,
    size: 8.5,
    font: fontRegular,
    color: colorGray,
  });
  y -= 11.5;

  page.drawText('•', { x: marginX + 4, y: y, size: 8, font: fontRegular, color: colorBlack });
  drawWrappedText(
    'Completed a Data Science internship, applying data science concepts and Python-based tools in practical work.',
    8.1,
    fontRegular,
    colorBlack,
    10.5,
    14
  );
  y -= 2;

  // --- PROJECTS ---
  drawSectionHeader('PROJECTS');

  const projList = [
    {
      name: 'Web Digital Job Portal',
      tech: 'React.js, Node.js, PostgreSQL',
      bullets: [
        'Built a full-stack job portal enabling recruiters to post job openings and candidates to search and apply for positions.',
        'Developed RESTful APIs and role-based dashboards to streamline recruiter and candidate workflows.',
      ],
    },
    {
      name: 'Cloud Cost Optimization and Resource Prediction Dashboard',
      tech: 'Python, Flask, SQLite',
      bullets: [
        'Developed a Flask-based dashboard to monitor cloud resources and analyze associated costs.',
        'Implemented Machine Learning models to predict CPU, memory, storage, and cost usage.',
      ],
    },
    {
      name: 'Tourism Management System',
      tech: 'PHP, MySQL',
      bullets: [
        'Designed and developed a web application to automate tourism operations, including travel bookings and accommodations.',
        'Streamlined tour planning and customer service through a centralized, database-driven system.',
      ],
    },
    {
      name: 'Detecting Malicious Facebook Applications',
      tech: 'Java, MySQL',
      bullets: [
        'Built a Java-based system to identify malicious Facebook applications that pose privacy and data-misuse risks.',
        'Analyzed application permissions to flag suspicious data-access behavior and improve user security.',
      ],
    },
  ];

  for (const proj of projList) {
    page.drawText(proj.name, {
      x: marginX,
      y: y,
      size: 8.4,
      font: fontBold,
      color: colorBlack,
    });
    const pNameWidth = fontBold.widthOfTextAtSize(proj.name, 8.4);
    page.drawText(' |', {
      x: marginX + pNameWidth + 2,
      y: y,
      size: 8.4,
      font: fontRegular,
      color: colorGray,
    });
    y -= 10;

    page.drawText('Technologies: ', {
      x: marginX,
      y: y,
      size: 8,
      font: fontBold,
      color: colorBlack,
    });
    const techLabelWidth = fontBold.widthOfTextAtSize('Technologies: ', 8);
    page.drawText(proj.tech, {
      x: marginX + techLabelWidth,
      y: y,
      size: 8,
      font: fontRegular,
      color: colorBlack,
    });
    y -= 10;

    for (const b of proj.bullets) {
      page.drawText('•', { x: marginX + 4, y: y, size: 8, font: fontRegular, color: colorBlack });
      drawWrappedText(b, 8, fontRegular, colorBlack, 10, 14);
    }
    y -= 1.5;
  }
  y -= 1;

  // --- EDUCATION ---
  drawSectionHeader('EDUCATION');

  // Edu 1
  page.drawText('Master of Computer Applications (MCA)', {
    x: marginX,
    y: y,
    size: 8.4,
    font: fontBold,
    color: colorBlack,
  });
  const mcaWidth = fontBold.widthOfTextAtSize('Master of Computer Applications (MCA)', 8.4);
  page.drawText(' — Surana College Autonomous, Bengaluru | 2024 – 2026', {
    x: marginX + mcaWidth,
    y: y,
    size: 8.4,
    font: fontRegular,
    color: colorBlack,
  });
  y -= 10.5;

  page.drawText('CGPA: 8.5', {
    x: marginX,
    y: y,
    size: 8.2,
    font: fontBold,
    color: colorBlack,
  });
  y -= 11.5;

  // Edu 2
  page.drawText('Bachelor of Computer Applications (BCA)', {
    x: marginX,
    y: y,
    size: 8.4,
    font: fontBold,
    color: colorBlack,
  });
  const bcaWidth = fontBold.widthOfTextAtSize('Bachelor of Computer Applications (BCA)', 8.4);
  page.drawText(' — Government First Grade College, Bengaluru | 2020 – 2023', {
    x: marginX + bcaWidth,
    y: y,
    size: 8.4,
    font: fontRegular,
    color: colorBlack,
  });
  y -= 10.5;

  page.drawText('CGPA: 8.75', {
    x: marginX,
    y: y,
    size: 8.2,
    font: fontBold,
    color: colorBlack,
  });
  y -= 3;

  // --- CERTIFICATIONS & VIRTUAL INTERNSHIPS ---
  drawSectionHeader('CERTIFICATIONS & VIRTUAL INTERNSHIPS');

  const certs = [
    'AWS Data Engineering Virtual Internship',
    'AICTE Android Developer Virtual Internship',
    'AICTE AI-ML Virtual Internship',
  ];

  for (const c of certs) {
    page.drawText('•  ' + c, {
      x: marginX + 4,
      y: y,
      size: 8.2,
      font: fontRegular,
      color: colorBlack,
    });
    y -= 10.5;
  }
  y -= 1;

  // --- PUBLICATION ---
  drawSectionHeader('PUBLICATION');
  drawWrappedText(
    'Neuro Cloud: An AI-Driven Framework for Intelligent Anomaly Detection and Performance Monitoring in a Cloud Environment',
    8.2,
    fontRegular,
    colorBlack,
    10.5,
    0
  );

  const pdfBytes = await pdfDoc.save();
  const outputPath = path.join(__dirname, '..', 'public', 'Varsha_RD_Resume.pdf');
  fs.writeFileSync(outputPath, pdfBytes);
  console.log('Successfully generated resume PDF at:', outputPath, 'Size:', pdfBytes.length, 'bytes');
}

createResumePdf().catch((err) => {
  console.error('Error generating resume PDF:', err);
  process.exit(1);
});
