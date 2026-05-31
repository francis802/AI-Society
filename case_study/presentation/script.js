function showInfo(year) {
    const contentElement = document.getElementById('timeline-content');
    const balls = document.querySelectorAll('.timeline-ball');
    const buttons = document.querySelectorAll('.timeline-btn');

    balls.forEach(ball => ball.classList.remove('active'));
    buttons.forEach(btn => btn.classList.remove('active'));

    document.getElementById(`ball-${year.replace('–', '-')}`).classList.add('active');
    document.getElementById(`btn-${year.replace('–', '-')}`).classList.add('active');

    let content = '';
    switch (year) {
        case '2017':
            content = `<p>The city of Rotterdam implemented a machine learning algorithm built by Accenture Consulting. The algorithm aimed to generate risk scores for welfare-seeking individuals using data from prior fraud investigations.</p>`;
            break;
        case '2018-2020':
            content = `<p>Factors such as age, gender, and Dutch proficiency were used to evaluate risk. The system was praised as a model for other cities, despite growing concerns about its potential biases.</p>`;
            break;
        case '2021':
            content = `<p>Following an ethical review requested by the Dutch government, the system was halted. The review revealed discriminatory behavior based on ethnicity and gender.</p>`;
            break;
        case '2022':
            content = `<p>Despite its initial promise, the algorithm was found to perform only slightly better than random chance. It serves as a cautionary tale of how AI can amplify human biases.</p>`;
            break;
        default:
            content = '';
    }

    contentElement.innerHTML = content;
    contentElement.classList.add('visible');
}

function toggleSection(sectionId) {
    const content = document.getElementById(sectionId);
    const icon = document.getElementById(`icon-${sectionId}`);

    const isVisible = content.classList.contains('visible');
    document.querySelectorAll('.details-content').forEach(el => el.classList.remove('visible'));
    document.querySelectorAll('.toggle-icon').forEach(el => el.textContent = '+');

    if (!isVisible) {
        content.classList.add('visible');
        icon.textContent = '-';
    }
}

let currentSlide = 0;

const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function moveSlide(step) {
    currentSlide += step;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    const carouselContainer = document.querySelector('.carousel-container');
    carouselContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

const saraImages = [
    "images/sara_1.png",
    "images/sara_2.png",
    "images/sara_3.png",
    "images/sara_4.png",
    "images/sara_5.png",
    "images/sara_6.png"
];

let saraIndex = 0;

document.getElementById("sara-button").addEventListener("click", function () {
    const saraImage = document.getElementById("sara-image");
    saraIndex = (saraIndex + 1) % saraImages.length;
    saraImage.src = saraImages[saraIndex];
});

document.getElementById("yusef-button").addEventListener("click", function () {
    const yusefImage = document.getElementById("yusef-image");
    yusefImage.src = yusefImage.src.includes("images/yusef_1.png")
        ? "images/yusef_2.png"
        : "images/yusef_1.png";
});

const originalTableContent = `
    <thead>
        <tr>
            <th>Serial Number</th>
            <th>Gender</th>
            <th>International</th>
            <th>GPA</th>
            <th>Major</th>
            <th>Race</th>
            <th>GMAT</th>
            <th>Work Experience</th>
            <th>Work Industry</th>
            <th>Admission</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Female</td>
            <td>False</td>
            <td>3.3</td>
            <td>Business</td>
            <td>Asian</td>
            <td>620.0</td>
            <td>3.0</td>
            <td>Financial</td>
            <td>Admit</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Male</td>
            <td>False</td>
            <td>3.28</td>
            <td>Humanities</td>
            <td>Black</td>
            <td>680.0</td>
            <td>5.0</td>
            <td>Investment Management</td>
            <td>-</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Female</td>
            <td>True</td>
            <td>3.3</td>
            <td>Business</td>
            <td>-</td>
            <td>710.0</td>
            <td>5.0</td>
            <td>Technology</td>
            <td>Admit</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Male</td>
            <td>False</td>
            <td>3.47</td>
            <td>STEM</td>
            <td>Black</td>
            <td>690.0</td>
            <td>6.0</td>
            <td>Technology</td>
            <td>-</td>
        </tr>
        <tr>
            <td>5</td>
            <td>Male</td>
            <td>False</td>
            <td>3.35</td>
            <td>STEM</td>
            <td>Hispanic</td>
            <td>590.0</td>
            <td>5.0</td>
            <td>Consulting</td>
            <td>-</td>
        </tr>
    </tbody>
`;

const featuredTableContent = `
    <thead>
        <tr>
            <th>Gender</th>
            <th>GPA</th>
            <th>Major</th>
            <th>Race</th>
            <th>GMAT</th>
            <th>Work Experience</th>
            <th>Work Industry</th>
            <th>Admission</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>3.30</td>
            <td>0</td>
            <td>0</td>
            <td>620.0</td>
            <td>3.0</td>
            <td>3</td>
            <td>1</td>
        </tr>
        <tr>
            <td>0</td>
            <td>3.28</td>
            <td>1</td>
            <td>1</td>
            <td>680.0</td>
            <td>5.0</td>
            <td>6</td>
            <td>0</td>
        </tr>
        <tr>
            <td>1</td>
            <td>3.30</td>
            <td>0</td>
            <td>3</td>
            <td>710.0</td>
            <td>5.0</td>
            <td>13</td>
            <td>1</td>
        </tr>
        <tr>
            <td>0</td>
            <td>3.47</td>
            <td>2</td>
            <td>1</td>
            <td>690.0</td>
            <td>6.0</td>
            <td>13</td>
            <td>0</td>
        </tr>
        <tr>
            <td>0</td>
            <td>3.35</td>
            <td>2</td>
            <td>2</td>
            <td>590.0</td>
            <td>5.0</td>
            <td>1</td>
            <td>0</td>
        </tr>
    </tbody>
`;

document.getElementById('see-original-btn').addEventListener('click', () => {
    const table = document.getElementById('mba-dataset-table');
    table.innerHTML = originalTableContent;
});

document.getElementById('see-featured-btn').addEventListener('click', () => {
    const table = document.getElementById('mba-dataset-table');
    table.innerHTML = featuredTableContent;
});

document.getElementById("SMOTE-button").addEventListener("click", function () {
    const yusefImage = document.getElementById("charts");
    yusefImage.src = yusefImage.src.includes("images/chart1.png")
        ? "images/chart2.png"
        : "images/chart1.png";
});

document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(content => content.classList.remove('active'));
            tab.classList.add('active');
            document.querySelector(`.${tab.dataset.target}`).classList.add('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-button-shap');
    const contents = document.querySelectorAll('.tab-content-shap');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(content => content.classList.remove('active'));
            tab.classList.add('active');
            document.querySelector(`.${tab.dataset.target}`).classList.add('active');
        });
    });
});
