// --- RESPONSIVE SIDEBARS & TABS CONTROLLER ---

document.addEventListener("DOMContentLoaded", () => {
    // Elements
    const btnToggleLeft = document.getElementById("btn-toggle-left");
    const btnToggleRight = document.getElementById("btn-toggle-right");
    const sidebarLeft = document.querySelector(".sidebar-left");
    const sidebarRight = document.querySelector(".sidebar-right");
    const overlay = document.querySelector(".sidebar-overlay");
    
    const tabEdit = document.getElementById("tab-edit");
    const tabPreview = document.getElementById("tab-preview");
    const editorPanel = document.querySelector(".editor-panel");

    // Initial state setup for mobile tabs
    if (editorPanel) {
        editorPanel.classList.add("show-editor");
    }

    // --- SIDEBAR ACTIONS ---

    function openSidebar(sidebar) {
        if (!sidebar) return;
        sidebar.classList.add("open");
        overlay.classList.add("active");
        document.body.style.overflow = "hidden"; // Prevents background body scrolling
    }

    function closeSidebars() {
        if (sidebarLeft) sidebarLeft.classList.remove("open");
        if (sidebarRight) sidebarRight.classList.remove("open");
        if (overlay) overlay.classList.remove("active");
        document.body.style.overflow = ""; // Restores scrolling
    }

    // Toggle Left Sidebar (Weeks list)
    if (btnToggleLeft) {
        btnToggleLeft.addEventListener("click", (e) => {
            e.stopPropagation();
            if (sidebarLeft.classList.contains("open")) {
                closeSidebars();
            } else {
                closeSidebars(); // Close others first
                openSidebar(sidebarLeft);
            }
        });
    }

    // Toggle Right Sidebar (Actions & Resources)
    if (btnToggleRight) {
        btnToggleRight.addEventListener("click", (e) => {
            e.stopPropagation();
            if (sidebarRight.classList.contains("open")) {
                closeSidebars();
            } else {
                closeSidebars(); // Close others first
                openSidebar(sidebarRight);
            }
        });
    }

    // Close on overlay click
    if (overlay) {
        overlay.addEventListener("click", closeSidebars);
    }

    // Auto-close left sidebar on selecting a week card
    const weekList = document.getElementById("week-list-container");
    if (weekList) {
        weekList.addEventListener("click", (e) => {
            if (e.target.closest(".week-card")) {
                closeSidebars();
            }
        });
    }

    // Auto-close right sidebar after action triggers (Save, Copy, Reset, Download)
    if (sidebarRight) {
        sidebarRight.addEventListener("click", (e) => {
            if (e.target.closest(".btn")) {
                setTimeout(closeSidebars, 200);
            }
        });
    }

    // --- TABS ACTIONS (MOBILE WORKSPACE) ---

    if (tabEdit && tabPreview && editorPanel) {
        tabEdit.addEventListener("click", () => {
            tabEdit.classList.add("active");
            tabPreview.classList.remove("active");
            editorPanel.classList.add("show-editor");
            editorPanel.classList.remove("show-preview");
        });

        tabPreview.addEventListener("click", () => {
            tabPreview.classList.add("active");
            tabEdit.classList.remove("active");
            editorPanel.classList.add("show-preview");
            editorPanel.classList.remove("show-editor");
        });
    }
});
