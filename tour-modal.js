document.addEventListener("DOMContentLoaded", function () {
    // 1. Tạo HTML cho Nút bấm & Popup Form
    const tourModalHTML = `
        <button id="openTourBtn" class="floating-tour-btn" type="button" aria-label="Đặt Tour Di Sản">
            <span>🎫</span>
            <span>Đặt Tour Di Sản</span>
        </button>

        <div id="tourModal" class="tour-modal-overlay">
            <div class="tour-modal-content">
                <button id="closeTourBtn" class="modal-close-btn" type="button" aria-label="Đóng">&times;</button>
                
                <div class="modal-header">
                    <h3>Đăng Ký Tour Khám Phá Di Sản</h3>
                    <p>Để lại thông tin, ThenHub sẽ liên hệ tư vấn lịch trình chi tiết cho bạn!</p>
                </div>

                <form id="tourForm" action="https://formspree.io/f/xdeelygy" method="POST">
                    <div class="form-group">
                        <label for="tourName">Họ và tên *</label>
                        <input type="text" id="tourName" name="Họ và tên" placeholder="Ví dụ: Nguyễn Văn A" required>
                    </div>

                    <div class="form-group">
                        <label for="tourPhone">Số điện thoại *</label>
                        <input type="tel" id="tourPhone" name="Số điện thoại" placeholder="Ví dụ: 0912 345 678" required>
                    </div>

                    <div class="form-group">
                        <label for="tourEmail">Email liên hệ</label>
                        <input type="email" id="tourEmail" name="Email" placeholder="nguyenvana@gmail.com">
                    </div>

                    <div class="form-group">
                        <label for="tourDate">Ngày dự kiến tham gia</label>
                        <input type="date" id="tourDate" name="Ngày khởi hành">
                    </div>

                    <div class="form-group">
                        <label for="tourNote">Ghi chú (Số người, yêu cầu đặc biệt)</label>
                        <textarea id="tourNote" id="tourNote" name="Ghi chú" rows="3" placeholder="Ví dụ: Đoàn 4 người, đi vào cuối tuần..."></textarea>
                    </div>

                    <button type="submit" class="submit-tour-btn">Xác Nhận Đăng Ký</button>
                </form>
            </div>
        </div>
    `;

    // 2. Chèn HTML vào cuối <body>
    document.body.insertAdjacentHTML("beforeend", tourModalHTML);

    // 3. Gắn sự kiện Bật / Tắt Modal
    const openBtn = document.getElementById("openTourBtn");
    const closeBtn = document.getElementById("closeTourBtn");
    const modal = document.getElementById("tourModal");

    if (openBtn && closeBtn && modal) {
        openBtn.addEventListener("click", () => modal.classList.add("active"));
        closeBtn.addEventListener("click", () => modal.classList.remove("active"));
        window.addEventListener("click", (e) => {
            if (e.target === modal) modal.classList.remove("active");
        });
    }
});