// Sample data for testing
const sampleData = {
    companies: [
        { 
            id: 1, 
            name: 'Google', 
            sector: 'tech', 
            roles: 'SDE, Data Scientist, Product Manager', 
            minPackage: 18, 
            maxPackage: 45,
            interviewDate: '2023-11-15',
            eligibility: 'CGPA ≥ 7.5, No active backlogs',
            studentsHired: 5
        },
        { 
            id: 2, 
            name: 'Amazon', 
            sector: 'tech', 
            roles: 'SDE, DevOps Engineer', 
            minPackage: 15, 
            maxPackage: 40,
            interviewDate: '2023-11-18',
            eligibility: 'CGPA ≥ 7.0, No active backlogs',
            studentsHired: 8
        },
        { 
            id: 3, 
            name: 'Goldman Sachs', 
            sector: 'finance', 
            roles: 'Financial Analyst, Technology Analyst', 
            minPackage: 20, 
            maxPackage: 35,
            interviewDate: '2023-11-25',
            eligibility: 'CGPA ≥ 8.0, No history of backlogs',
            studentsHired: 3
        },
        { 
            id: 4, 
            name: 'Microsoft', 
            sector: 'tech', 
            roles: 'SDE, Program Manager', 
            minPackage: 18, 
            maxPackage: 43,
            interviewDate: '2023-12-05',
            eligibility: 'CGPA ≥ 7.0, Maximum 1 backlog',
            studentsHired: 7
        },
        { 
            id: 5, 
            name: 'Deloitte', 
            sector: 'consulting', 
            roles: 'Business Analyst, Tech Consultant', 
            minPackage: 10, 
            maxPackage: 18,
            interviewDate: '2023-12-10',
            eligibility: 'CGPA ≥ 6.5, No restriction on backlogs',
            studentsHired: 12
        }
    ],
    students: [
        {
            id: 1,
            rollNo: 'CSE001',
            name: 'Rahul Sharma',
            branch: 'cse',
            cgpa: 9.2,
            placementStatus: 'placed',
            company: 'Google',
            role: 'SDE',
            package: 36,
            placementDate: '2023-11-16'
        },
        {
            id: 2,
            rollNo: 'CSE002',
            name: 'Priya Patel',
            branch: 'cse',
            cgpa: 8.7,
            placementStatus: 'placed',
            company: 'Microsoft',
            role: 'SDE',
            package: 32,
            placementDate: '2023-12-06'
        },
        {
            id: 3,
            rollNo: 'ECE001',
            name: 'Amit Kumar',
            branch: 'ece',
            cgpa: 8.1,
            placementStatus: 'placed',
            company: 'Amazon',
            role: 'DevOps Engineer',
            package: 28,
            placementDate: '2023-11-19'
        },
        {
            id: 4,
            rollNo: 'ME001',
            name: 'Sneha Gupta',
            branch: 'me',
            cgpa: 7.8,
            placementStatus: 'placed',
            company: 'Deloitte',
            role: 'Tech Consultant',
            package: 15,
            placementDate: '2023-12-11'
        },
        {
            id: 5,
            rollNo: 'CSE003',
            name: 'Vikram Singh',
            branch: 'cse',
            cgpa: 9.0,
            placementStatus: 'placed',
            company: 'Google',
            role: 'Data Scientist',
            package: 40,
            placementDate: '2023-11-16'
        },
        {
            id: 6,
            rollNo: 'CSE004',
            name: 'Neha Mishra',
            branch: 'cse',
            cgpa: 8.5,
            placementStatus: 'placed',
            company: 'Amazon',
            role: 'SDE',
            package: 30,
            placementDate: '2023-11-19'
        },
        {
            id: 7,
            rollNo: 'ECE002',
            name: 'Karan Agarwal',
            branch: 'ece',
            cgpa: 7.5,
            placementStatus: 'unplaced',
            company: '',
            role: '',
            package: 0,
            placementDate: ''
        },
        {
            id: 8,
            rollNo: 'ME002',
            name: 'Aarav Mehta',
            branch: 'me',
            cgpa: 6.8,
            placementStatus: 'unplaced',
            company: '',
            role: '',
            package: 0,
            placementDate: ''
        },
        {
            id: 9,
            rollNo: 'CIVIL001',
            name: 'Pooja Verma',
            branch: 'civil',
            cgpa: 8.3,
            placementStatus: 'placed',
            company: 'Deloitte',
            role: 'Business Analyst',
            package: 14,
            placementDate: '2023-12-11'
        },
        {
            id: 10,
            rollNo: 'CSE005',
            name: 'Arjun Reddy',
            branch: 'cse',
            cgpa: 8.9,
            placementStatus: 'placed',
            company: 'Goldman Sachs',
            role: 'Technology Analyst',
            package: 32,
            placementDate: '2023-11-26'
        }
    ]
};

// DOM Elements
const navLinks = document.querySelectorAll('nav a');
const views = document.querySelectorAll('.view');
const totalCompaniesEl = document.getElementById('total-companies');
const totalStudentsEl = document.getElementById('total-students');
const placedStudentsEl = document.getElementById('placed-students');
const placementRateEl = document.getElementById('placement-rate');
const recentPlacementsTable = document.getElementById('recent-placements').querySelector('tbody');
const upcomingInterviewsTable = document.getElementById('upcoming-interviews').querySelector('tbody');
const companiesTable = document.getElementById('companies-table').querySelector('tbody');
const studentsTable = document.getElementById('students-table').querySelector('tbody');
const companySearch = document.getElementById('company-search');
const companyFilter = document.getElementById('company-filter');
const studentSearch = document.getElementById('student-search');
const studentFilter = document.getElementById('student-filter');
const placementFilter = document.getElementById('placement-filter');
const companyModal = document.getElementById('company-modal');
const studentModal = document.getElementById('student-modal');
const companyForm = document.getElementById('company-form');
const studentForm = document.getElementById('student-form');
const addCompanyBtn = document.getElementById('add-company-btn');
const addStudentBtn = document.getElementById('add-student-btn');
const placementStatus = document.getElementById('placement-status');
const placementDetails = document.getElementById('placement-details');
const placedCompanySelect = document.getElementById('placed-company');
const companyModalTitle = document.getElementById('company-modal-title');
const studentModalTitle = document.getElementById('student-modal-title');
const closeButtons = document.querySelectorAll('.close');
const cancelButtons = document.querySelectorAll('.cancel-btn');

// State management
let companies = JSON.parse(localStorage.getItem('companies')) || sampleData.companies;
let students = JSON.parse(localStorage.getItem('students')) || sampleData.students;
let editingCompanyId = null;
let editingStudentId = null;

// Initialize the app
function init() {
    // Set up event listeners
    setupEventListeners();
    
    // Load data and render views
    updateDashboard();
    renderCompanies();
    renderStudents();
    populateCompanySelect();
    renderCharts();
    
    // Save initial data if not already saved
    if (!localStorage.getItem('companies')) {
        saveData();
    }
}

// Set up event listeners
function setupEventListeners() {
    // Navigation
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const viewId = this.getAttribute('data-view');
            changeView(viewId);
        });
    });
    
    // Forms
    companyForm.addEventListener('submit', handleCompanySubmit);
    studentForm.addEventListener('submit', handleStudentSubmit);
    
    // Modal Triggers
    addCompanyBtn.addEventListener('click', openCompanyModal);
    addStudentBtn.addEventListener('click', openStudentModal);
    
    // Modal Close Buttons
    closeButtons.forEach(btn => {
        btn.addEventListener('click', closeModals);
    });
    
    cancelButtons.forEach(btn => {
        btn.addEventListener('click', closeModals);
    });
    
    // Placement Status Change
    placementStatus.addEventListener('change', togglePlacementDetails);
    
    // Search and Filters
    companySearch.addEventListener('input', renderCompanies);
    companyFilter.addEventListener('change', renderCompanies);
    studentSearch.addEventListener('input', renderStudents);
    studentFilter.addEventListener('change', renderStudents);
    placementFilter.addEventListener('change', renderStudents);
    
    // Window click to close modals
    window.addEventListener('click', function(e) {
        if (e.target === companyModal) {
            companyModal.style.display = 'none';
        } else if (e.target === studentModal) {
            studentModal.style.display = 'none';
        }
    });
}

// Change active view
function changeView(viewId) {
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-view') === viewId) {
            link.classList.add('active');
        }
    });
    
    views.forEach(view => {
        view.classList.remove('active');
        if (view.id === viewId) {
            view.classList.add('active');
        }
    });
}

// Update dashboard statistics
function updateDashboard() {
    // Update stats
    totalCompaniesEl.textContent = companies.length;
    totalStudentsEl.textContent = students.length;
    
    const placedStudents = students.filter(student => student.placementStatus === 'placed');
    placedStudentsEl.textContent = placedStudents.length;
    
    const placementRate = (placedStudents.length / students.length * 100).toFixed(1);
    placementRateEl.textContent = `${placementRate}%`;
    
    // Render recent placements
    recentPlacementsTable.innerHTML = '';
    const recentPlacements = [...placedStudents]
        .sort((a, b) => new Date(b.placementDate) - new Date(a.placementDate))
        .slice(0, 5);
    
    recentPlacements.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.company}</td>
            <td>${student.role}</td>
            <td>${student.package}</td>
            <td>${formatDate(student.placementDate)}</td>
        `;
        recentPlacementsTable.appendChild(row);
    });
    
    // Render upcoming interviews
    upcomingInterviewsTable.innerHTML = '';
    const today = new Date();
    const upcomingInterviews = companies
        .filter(company => new Date(company.interviewDate) >= today)
        .sort((a, b) => new Date(a.interviewDate) - new Date(b.interviewDate))
        .slice(0, 5);
    
    upcomingInterviews.forEach(company => {
        const row = document.createElement('tr');
        const interviewDate = new Date(company.interviewDate);
        const daysUntil = Math.ceil((interviewDate - today) / (1000 * 60 * 60 * 24));
        
        let status;
        if (daysUntil === 0) {
            status = '<span class="badge badge-warning">Today</span>';
        } else if (daysUntil === 1) {
            status = '<span class="badge badge-warning">Tomorrow</span>';
        } else {
            status = `<span class="badge badge-success">In ${daysUntil} days</span>`;
        }
        
        row.innerHTML = `
            <td>${company.name}</td>
            <td>${company.roles}</td>
            <td>${formatDate(company.interviewDate)}</td>
            <td>${company.eligibility}</td>
            <td>${status}</td>
        `;
        upcomingInterviewsTable.appendChild(row);
    });
}

// Render companies table
function renderCompanies() {
    companiesTable.innerHTML = '';
    
    // Apply search and filter
    const searchTerm = companySearch.value.toLowerCase();
    const sectorFilter = companyFilter.value;
    
    const filteredCompanies = companies.filter(company => {
        const matchesSearch = company.name.toLowerCase().includes(searchTerm);
        const matchesSector = sectorFilter === 'all' || company.sector === sectorFilter;
        return matchesSearch && matchesSector;
    });
    
    filteredCompanies.forEach(company => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${company.name}</td>
            <td>${formatSector(company.sector)}</td>
            <td>${company.roles}</td>
            <td>${company.minPackage} - ${company.maxPackage}</td>
            <td>${company.studentsHired}</td>
            <td>
                <button class="action-btn edit" data-id="${company.id}"><i class="fas fa-edit"></i></button>
                <button class="action-btn delete" data-id="${company.id}"><i class="fas fa-trash"></i></button>
            </td>
        `;
        
        // Add event listeners to buttons
        companiesTable.appendChild(row);
        
        // Add event listeners to edit and delete buttons
        const editBtn = row.querySelector('.edit');
        const deleteBtn = row.querySelector('.delete');
        
        editBtn.addEventListener('click', () => editCompany(company.id));
        deleteBtn.addEventListener('click', () => deleteCompany(company.id));
    });
}

// Render students table
function renderStudents() {
    studentsTable.innerHTML = '';
    
    // Apply search and filters
    const searchTerm = studentSearch.value.toLowerCase();
    const branchFilter = studentFilter.value;
    const statusFilter = placementFilter.value;
    
    const filteredStudents = students.filter(student => {
        const matchesSearch = student.name.toLowerCase().includes(searchTerm) || 
                              student.rollNo.toLowerCase().includes(searchTerm);
        const matchesBranch = branchFilter === 'all' || student.branch === branchFilter;
        const matchesStatus = statusFilter === 'all' || student.placementStatus === statusFilter;
        return matchesSearch && matchesBranch && matchesStatus;
    });
    
    filteredStudents.forEach(student => {
        const row = document.createElement('tr');
        
        // Status badge
        let statusBadge;
        if (student.placementStatus === 'placed') {
            statusBadge = `<span class="badge badge-success">Placed</span>`;
        } else {
            statusBadge = `<span class="badge badge-warning">Unplaced</span>`;
        }
        
        row.innerHTML = `
            <td>${student.rollNo}</td>
            <td>${student.name}</td>
            <td>${formatBranch(student.branch)}</td>
            <td>${student.cgpa}</td>
            <td>${statusBadge}</td>
            <td>${student.company || '-'}</td>
            <td>${student.package || '-'}</td>
            <td>
                <button class="action-btn edit" data-id="${student.id}"><i class="fas fa-edit"></i></button>
                <button class="action-btn delete" data-id="${student.id}"><i class="fas fa-trash"></i></button>
            </td>
        `;
        
        studentsTable.appendChild(row);
        
        // Add event listeners to edit and delete buttons
        const editBtn = row.querySelector('.edit');
        const deleteBtn = row.querySelector('.delete');
        
        editBtn.addEventListener('click', () => editStudent(student.id));
        deleteBtn.addEventListener('click', () => deleteStudent(student.id));
    });
}

// Save data to localStorage
function saveData() {
    localStorage.setItem('companies', JSON.stringify(companies));
    localStorage.setItem('students', JSON.stringify(students));
}

// Form handlers
function handleCompanySubmit(e) {
    e.preventDefault();
    
    const companyData = {
        name: document.getElementById('company-name').value,
        sector: document.getElementById('company-sector').value,
        roles: document.getElementById('company-roles').value,
        minPackage: parseFloat(document.getElementById('min-package').value),
        maxPackage: parseFloat(document.getElementById('max-package').value),
        interviewDate: document.getElementById('interview-date').value,
        eligibility: document.getElementById('eligibility-criteria').value,
        studentsHired: editingCompanyId ? getCompanyById(editingCompanyId).studentsHired : 0
    };
    
    if (editingCompanyId) {
        // Update existing company
        const index = companies.findIndex(c => c.id === editingCompanyId);
        companyData.id = editingCompanyId;
        companies[index] = companyData;
    } else {
        // Add new company
        companyData.id = generateId(companies);
        companies.push(companyData);
    }
    
    saveData();
    closeModals();
    updateDashboard();
    renderCompanies();
    populateCompanySelect();
    renderCharts();
}

function handleStudentSubmit(e) {
    e.preventDefault();
    
    const isPlaced = document.getElementById('placement-status').value === 'placed';
    
    const studentData = {
        rollNo: document.getElementById('student-roll').value,
        name: document.getElementById('student-name').value,
        branch: document.getElementById('student-branch').value,
        cgpa: parseFloat(document.getElementById('student-cgpa').value),
        placementStatus: document.getElementById('placement-status').value,
        company: isPlaced ? document.getElementById('placed-company').value : '',
        role: isPlaced ? document.getElementById('placed-role').value : '',
        package: isPlaced ? parseFloat(document.getElementById('placed-package').value) : 0,
        placementDate: isPlaced ? document.getElementById('placement-date').value : ''
    };
    
    if (editingStudentId) {
        // Update existing student
        const index = students.findIndex(s => s.id === editingStudentId);
        studentData.id = editingStudentId;
        students[index] = studentData;
    } else {
        // Add new student
        studentData.id = generateId(students);
        students.push(studentData);
    }
    
    // Update company's studentsHired count if placed
    if (isPlaced) {
        const company = companies.find(c => c.name === studentData.company);
        if (company) {
            const placedStudentsForCompany = students.filter(s => 
                s.company === company.name && s.placementStatus === 'placed' && 
                (editingStudentId ? s.id !== editingStudentId : true)
            ).length;
            
            company.studentsHired = placedStudentsForCompany + 1;
        }
    }
    
    saveData();
    closeModals();
    updateDashboard();
    renderStudents();
    renderCharts();
}

// Modal functions
function openCompanyModal() {
    companyModalTitle.textContent = 'Add Company';
    companyForm.reset();
    editingCompanyId = null;
    companyModal.style.display = 'block';
}

function openStudentModal() {
    studentModalTitle.textContent = 'Add Student';
    studentForm.reset();
    editingStudentId = null;
    placementDetails.style.display = 'none';
    studentModal.style.display = 'block';
}

function closeModals() {
    companyModal.style.display = 'none';
    studentModal.style.display = 'none';
}

function togglePlacementDetails() {
    placementDetails.style.display = placementStatus.value === 'placed' ? 'block' : 'none';
}

// CRUD operations
function editCompany(id) {
    const company = getCompanyById(id);
    if (!company) return;
    
    editingCompanyId = id;
    companyModalTitle.textContent = 'Edit Company';
    
    document.getElementById('company-name').value = company.name;
    document.getElementById('company-sector').value = company.sector;
    document.getElementById('company-roles').value = company.roles;
    document.getElementById('min-package').value = company.minPackage;
    document.getElementById('max-package').value = company.maxPackage;
    document.getElementById('interview-date').value = company.interviewDate;
    document.getElementById('eligibility-criteria').value = company.eligibility;
    
    companyModal.style.display = 'block';
}

function deleteCompany(id) {
    if (confirm('Are you sure you want to delete this company?')) {
        const index = companies.findIndex(c => c.id === id);
        if (index !== -1) {
            companies.splice(index, 1);
            saveData();
            updateDashboard();
            renderCompanies();
            populateCompanySelect();
            renderCharts();
        }
    }
}

function editStudent(id) {
    const student = getStudentById(id);
    if (!student) return;
    
    editingStudentId = id;
    studentModalTitle.textContent = 'Edit Student';
    
    document.getElementById('student-roll').value = student.rollNo;
    document.getElementById('student-name').value = student.name;
    document.getElementById('student-branch').value = student.branch;
    document.getElementById('student-cgpa').value = student.cgpa;
    document.getElementById('placement-status').value = student.placementStatus;
    
    if (student.placementStatus === 'placed') {
        placementDetails.style.display = 'block';
        document.getElementById('placed-company').value = student.company;
        document.getElementById('placed-role').value = student.role;
        document.getElementById('placed-package').value = student.package;
        document.getElementById('placement-date').value = student.placementDate;
    } else {
        placementDetails.style.display = 'none';
    }
    
    studentModal.style.display = 'block';
}

function deleteStudent(id) {
    if (confirm('Are you sure you want to delete this student?')) {
        const student = getStudentById(id);
        const index = students.findIndex(s => s.id === id);
        
        if (index !== -1) {
            // Update company's studentsHired count if student was placed
            if (student.placementStatus === 'placed') {
                const company = companies.find(c => c.name === student.company);
                if (company) {
                    company.studentsHired = Math.max(0, company.studentsHired - 1);
                }
            }
            
            students.splice(index, 1);
            saveData();
            updateDashboard();
            renderStudents();
            renderCharts();
        }
    }
}

// Utility functions
function populateCompanySelect() {
    // Clear existing options except the first one
    while (placedCompanySelect.options.length > 1) {
        placedCompanySelect.remove(1);
    }
    
    // Add company options
    companies.forEach(company => {
        const option = document.createElement('option');
        option.value = company.name;
        option.textContent = company.name;
        placedCompanySelect.appendChild(option);
    });
}

function getCompanyById(id) {
    return companies.find(company => company.id === id);
}

function getStudentById(id) {
    return students.find(student => student.id === id);
}

function generateId(items) {
    return items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1;
}

function formatDate(dateString) {
    if (!dateString) return '-';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

function formatSector(sector) {
    switch (sector) {
        case 'tech': return 'Technology';
        case 'finance': return 'Finance';
        case 'consulting': return 'Consulting';
        case 'other': return 'Other';
        default: return sector;
    }
}

function formatBranch(branch) {
    switch (branch) {
        case 'cse': return 'Computer Science';
        case 'ece': return 'Electronics';
        case 'me': return 'Mechanical';
        case 'civil': return 'Civil';
        case 'other': return 'Other';
        default: return branch;
    }
}

// Chart rendering functions
function renderCharts() {
    renderBranchChart();
    renderCompanyChart();
    renderSalaryChart();
    renderTrendChart();
}

function renderBranchChart() {
    const ctx = document.getElementById('branch-chart').getContext('2d');
    
    // Get branch statistics
    const branchStats = {
        cse: { total: 0, placed: 0 },
        ece: { total: 0, placed: 0 },
        me: { total: 0, placed: 0 },
        civil: { total: 0, placed: 0 },
        other: { total: 0, placed: 0 }
    };
    
    students.forEach(student => {
        if (branchStats[student.branch]) {
            branchStats[student.branch].total++;
            if (student.placementStatus === 'placed') {
                branchStats[student.branch].placed++;
            }
        } else {
            branchStats.other.total++;
            if (student.placementStatus === 'placed') {
                branchStats.other.placed++;
            }
        }
    });
    
    const labels = Object.keys(branchStats).map(branch => formatBranch(branch));
    const totalData = Object.values(branchStats).map(stat => stat.total);
    const placedData = Object.values(branchStats).map(stat => stat.placed);
    
    // Destroy existing chart if it exists
    if (window.branchChart) {
        window.branchChart.destroy();
    }
    
    window.branchChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Total Students',
                    data: totalData,
                    backgroundColor: 'rgba(52, 152, 219, 0.6)',
                    borderColor: 'rgba(52, 152, 219, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Placed Students',
                    data: placedData,
                    backgroundColor: 'rgba(46, 204, 113, 0.6)',
                    borderColor: 'rgba(46, 204, 113, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Number of Students'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Branch'
                    }
                }
            }
        }
    });
}

function renderCompanyChart() {
    const ctx = document.getElementById('company-chart').getContext('2d');
    
    // Get top 5 companies by hiring
    const topCompanies = [...companies]
        .sort((a, b) => b.studentsHired - a.studentsHired)
        .slice(0, 5);
    
    const labels = topCompanies.map(company => company.name);
    const data = topCompanies.map(company => company.studentsHired);
    
    // Destroy existing chart if it exists
    if (window.companyChart) {
        window.companyChart.destroy();
    }
    
    window.companyChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [
                {
                    data: data,
                    backgroundColor: [
                        'rgba(52, 152, 219, 0.6)',
                        'rgba(46, 204, 113, 0.6)',
                        'rgba(155, 89, 182, 0.6)',
                        'rgba(243, 156, 18, 0.6)',
                        'rgba(231, 76, 60, 0.6)'
                    ],
                    borderColor: [
                        'rgba(52, 152, 219, 1)',
                        'rgba(46, 204, 113, 1)',
                        'rgba(155, 89, 182, 1)',
                        'rgba(243, 156, 18, 1)',
                        'rgba(231, 76, 60, 1)'
                    ],
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                },
                title: {
                    display: true,
                    text: 'Top Hiring Companies'
                }
            }
        }
    });
}

function renderSalaryChart() {
    const ctx = document.getElementById('salary-chart').getContext('2d');
    
    // Get salary ranges
    const salaryRanges = {
        '< 10 LPA': 0,
        '10-20 LPA': 0,
        '20-30 LPA': 0,
        '30-40 LPA': 0,
        '40+ LPA': 0
    };
    
    students.forEach(student => {
        if (student.placementStatus === 'placed') {
            if (student.package < 10) {
                salaryRanges['< 10 LPA']++;
            } else if (student.package < 20) {
                salaryRanges['10-20 LPA']++;
            } else if (student.package < 30) {
                salaryRanges['20-30 LPA']++;
            } else if (student.package < 40) {
                salaryRanges['30-40 LPA']++;
            } else {
                salaryRanges['40+ LPA']++;
            }
        }
    });
    
    const labels = Object.keys(salaryRanges);
    const data = Object.values(salaryRanges);
    
    // Destroy existing chart if it exists
    if (window.salaryChart) {
        window.salaryChart.destroy();
    }
    
    window.salaryChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Number of Students',
                    data: data,
                    backgroundColor: 'rgba(155, 89, 182, 0.6)',
                    borderColor: 'rgba(155, 89, 182, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Number of Students'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Package Range'
                    }
                }
            }
        }
    });
}

function renderTrendChart() {
    const ctx = document.getElementById('trend-chart').getContext('2d');
    
    // Get monthly placement trend
    const monthlyTrend = {};
    
    students.forEach(student => {
        if (student.placementStatus === 'placed' && student.placementDate) {
            const date = new Date(student.placementDate);
            const monthYear = `${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}`;
            
            if (!monthlyTrend[monthYear]) {
                monthlyTrend[monthYear] = 1;
            } else {
                monthlyTrend[monthYear]++;
            }
        }
    });
    
    // Sort by date
    const sortedMonths = Object.keys(monthlyTrend).sort((a, b) => {
        const dateA = new Date(a);
        const dateB = new Date(b);
        return dateA - dateB;
    });
    
    const labels = sortedMonths;
    const data = sortedMonths.map(month => monthlyTrend[month]);
    
    // Destroy existing chart if it exists
    if (window.trendChart) {
        window.trendChart.destroy();
    }
    
    window.trendChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Number of Placements',
                    data: data,
                    fill: false,
                    backgroundColor: 'rgba(243, 156, 18, 0.6)',
                    borderColor: 'rgba(243, 156, 18, 1)',
                    borderWidth: 2,
                    tension: 0.1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Number of Placements'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Month'
                    }
                }
            }
        }
    });
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', init); 