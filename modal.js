// TỰ ĐỘNG CHÈN CSS & KHUNG POPUP VÀO TRANG KHI TẢI XONG
document.addEventListener("DOMContentLoaded", function () {

    // 1. CHÈN CSS POPUP TỰ ĐỘNG VÀO THẺ <HEAD> (TRÁNH LỖI VĂNG THÔ GIAO DIỆN)
    const modalStyle = document.createElement("style");
    modalStyle.innerHTML = `
        .modal-overlay {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100vw !important;
            height: 100vh !important;
            background: rgba(0, 0, 0, 0.65) !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            z-index: 99999 !important;
            opacity: 0 !important;
            visibility: hidden !important;
            transition: all 0.3s ease !important;
        }

        .modal-overlay.active {
            opacity: 1 !important;
            visibility: visible !important;
        }

        .modal-box {
            background: #FFFFFF !important;
            width: 90% !important;
            max-width: 520px !important;
            border-radius: 12px !important;
            padding: 28px !important;
            position: relative !important;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3) !important;
            transform: translateY(-20px) !important;
            transition: transform 0.3s ease !important;
            box-sizing: border-box !important;
        }

        .modal-overlay.active .modal-box {
            transform: translateY(0) !important;
        }

        .modal-close {
            position: absolute !important;
            top: 12px !important;
            right: 16px !important;
            background: none !important;
            border: none !important;
            font-size: 24px !important;
            cursor: pointer !important;
            color: #666 !important;
            line-height: 1 !important;
        }

        .modal-header {
            font-family: inherit !important;
            font-size: 18px !important;
            font-weight: 700 !important;
            color: #1A3E2E !important;
            margin-bottom: 14px !important;
            border-bottom: 2px solid #C68C32 !important;
            padding-bottom: 8px !important;
            text-align: left !important;
        }

        .modal-body {
            font-size: 14px !important;
            color: #444 !important;
            line-height: 1.6 !important;
            text-align: left !important;
        }

        .modal-tags {
            display: flex !important;
            gap: 8px !important;
            margin-top: 14px !important;
        }

        .modal-tags span {
            background: #F4EFE6 !important;
            color: #1A3E2E !important;
            font-size: 11px !important;
            padding: 4px 10px !important;
            border-radius: 12px !important;
            font-weight: 600 !important;
        }

        .contact-form {
            display: flex !important;
            flex-direction: column !important;
            gap: 10px !important;
            margin-top: 12px !important;
        }

        .contact-form input, 
        .contact-form textarea {
            width: 100% !important;
            padding: 10px 12px !important;
            border: 1px solid #DDD !important;
            border-radius: 6px !important;
            font-size: 13px !important;
            box-sizing: border-box !important;
            outline: none !important;
        }

        .contact-form input:focus, 
        .contact-form textarea:focus {
            border-color: #1A3E2E !important;
        }

        .btn-submit {
            background: #1A3E2E !important;
            color: #FFF !important;
            border: none !important;
            padding: 10px !important;
            border-radius: 6px !important;
            font-weight: 600 !important;
            cursor: pointer !important;
            transition: background 0.2s !important;
        }

        .btn-submit:hover {
            background: #C68C32 !important;
        }

        .contact-direct {
            margin-top: 14px !important;
            text-align: center !important;
            color: #777 !important;
        }
    `;
    document.head.appendChild(modalStyle);

    // 2. TẠO KHUNG HTML CHO 2 POPUP MODAL
    const modalsHTML = `
        <!-- POPUP VỀ THENHUB (ĐÃ ĐỔI SANG DẠNG DANH SÁCH GẠCH ĐẦU DÒNG) -->
        <div id="modalAbout" class="modal-overlay">
            <div class="modal-box">
                <button class="modal-close" onclick="closeModal('modalAbout')">&times;</button>
                <div class="modal-header">VỀ THENHUB – HƠI THỞ BIÊN CƯƠNG</div>
                <div class="modal-body">
                    <p style="font-weight: 600; color: #1A3E2E; margin-bottom: 6px;">Truyền tải sứ mệnh bảo tồn di sản văn hóa Hát Then:</p>
                    <ul class="modal-info-list">
                        <li><strong>Tên dự án:</strong> ThenHub – Hơi Thở Biên Cương.</li>
                        <li><strong>Sứ mệnh & Tầm nhìn:</strong> Nền tảng số hóa di sản văn hóa phi vật thể Hát Then – của đồng bào Tày, Nùng tại xứ Lạng. Dự án nhằm bảo tồn các làn điệu Then cổ, vinh danh nghệ nhân dân gian và đưa nghệ thuật truyền thống đến gần hơn với thế hệ trẻ.</li>
                        <li><strong>Giá trị cốt lõi:</strong>
                            <ul class="modal-sub-list">
                                <li><em>Số hóa & Lưu trữ:</em> Thu âm, tư liệu hóa các bản Then cổ chuẩn xác.</li>
                                <li><em>Trải nghiệm đa phương tiện:</em> Trình nghe nhạc trực quan, kho hình ảnh ký sự bản làng.</li>
                                <li><em>Xây dựng mạng lưới các câu lạc bộ Then và độc giả yêu thích văn hoá dân tộc</li>
                            </ul>
                        </li>
                    </ul>
                    <div class="modal-tags">
                        <span>#DiSanHatThen</span>
                        <span>#DanTinhLangSon</span>
                        <span>#VanHoaBienCuong</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- POPUP LIÊN HỆ (GỬI THẲNG VỀ EMAIL QUA FORMSPREE) -->
        <div id="modalContact" class="modal-overlay">
            <div class="modal-box">
                <button class="modal-close" onclick="closeModal('modalContact')">&times;</button>
                <div class="modal-header">LIÊN HỆ & ĐÓNG GÓP TƯ LIỆU</div>
                <div class="modal-body">
                    <p>Bạn có tư liệu, câu chuyện hoặc đóng góp về Hát Then Xứ Lạng? Hãy gửi thông tin cho Ban biên tập ThenHub:</p>
                    <form class="contact-form" action="https://formspree.io/f/meaaraap" method="POST">
                        <input type="text" name="Họ và tên" placeholder="Họ và tên của bạn" required>
                        <input type="email" name="Email" placeholder="Địa chỉ Email" required>
                        <textarea name="Nội dung" rows="3" placeholder="Nội dung lời nhắn hoặc đường dẫn tư liệu..." required></textarea>
                        <button type="submit" class="btn-submit">Gửi thông tin</button>
                    </form>
                    <div class="contact-direct">
                        <small>📧 Email: thenhubstartup@gmail.com | 📞 Hotline: 0828343596</small>
                    </div>
                </div>
            </div>
        </div>
    `;

    // 3. CHÈN KHUNG POPUP VÀO CUỐI THẺ <body>
    document.body.insertAdjacentHTML('beforeend', modalsHTML);

    // 4. BẮT SỰ KIỆN CLICK CHO NÚT "VỀ THENHUB" VÀ "LIÊN HỆ" TRÊN HEADER
    const navLinks = document.querySelectorAll('header a, .nav-link, nav a');

    navLinks.forEach(link => {
        const text = link.textContent.trim().toLowerCase();
        if (text.includes('về thenhub') || text.includes('ve thenhub')) {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                openModal('modalAbout');
            });
        }
        if (text.includes('liên hệ') || text.includes('lien he')) {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                openModal('modalContact');
            });
        }
    });

    // 5. CLICK RA NGOÀI KHUNG TRẮNG ĐỂ ĐÓNG POPUP
    window.addEventListener('click', function (e) {
        if (e.target.classList.contains('modal-overlay')) {
            e.target.classList.remove('active');
        }
    });
});

// HÀM BẬT / TẮT POPUP MODAL
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add('active');
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove('active');
}