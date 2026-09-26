const dishes = {
  'pho': {
    name: 'Phở',
    img: '/images/pho.jpg',
    desc: 'Món nước nổi tiếng nhất Việt Nam, gồm bánh phở mềm trong nước dùng hầm xương bò trong và thơm mùi quế, hồi, gừng nướng. Ăn kèm thịt bò tái hoặc chín, hành lá và rau thơm.',
  },
  'bun-cha': {
    name: 'Bún chả',
    img: '/images/bun-cha.jpg',
    desc: 'Đặc sản Hà Nội với chả thịt heo nướng than hoa thơm lừng, ăn cùng bún tươi, rau sống và bát nước chấm chua ngọt vừa vị.',
  },
  'banh-mi': {
    name: 'Bánh mì',
    img: '/images/banh-mi.jpg',
    desc: 'Ổ bánh mì giòn rụm kẹp pate, thịt nguội, đồ chua, dưa leo và rau mùi. Món ăn đường phố tiện lợi được yêu thích khắp thế giới.',
  },
  'goi-cuon': {
    name: 'Gỏi cuốn',
    img: '/images/goi-cuon.jpg',
    desc: 'Bánh tráng cuốn tôm, thịt luộc, bún và rau sống tươi mát, chấm với nước mắm pha hoặc tương đậu phộng. Nhẹ nhàng, thanh đạm và ít dầu mỡ.',
  },
  'cao-lau': {
    name: 'Cao lầu',
    img: '/images/cao-lau.jpg',
    desc: 'Đặc sản phố cổ Hội An với sợi mì vàng dai, thịt xíu, rau sống và bánh đa giòn, chan rất ít nước dùng đậm đà.',
  },
  'com-tam': {
    name: 'Cơm tấm',
    img: '/images/com-tam.jpg',
    desc: 'Món ăn đặc trưng của Sài Gòn, làm từ gạo tấm dẻo thơm, ăn kèm sườn nướng, trứng ốp la, đồ chua và nước mắm ngọt.',
  },
  'ca-phe': {
    name: 'Cà phê sữa đá',
    img: '/images/ca-phe.jpg',
    desc: 'Cà phê pha phin đậm đà hòa cùng sữa đặc ngọt béo, rót trên đá lạnh. Thức uống quen thuộc của người Việt mỗi buổi sáng.',
  },
};

const places = {
  'ha-long': {
    name: 'Vịnh Hạ Long',
    img: '/images/ha-long.jpg',
    desc: 'Thuộc tỉnh Quảng Ninh, được UNESCO công nhận là Di sản thiên nhiên thế giới. Vịnh có gần 2.000 đảo đá vôi và hang động kỳ vĩ, thích hợp để du thuyền, chèo kayak và ngắm bình minh trên biển.',
  },
  'hoi-an': {
    name: 'Phố cổ Hội An',
    img: '/images/hoi-an.jpg',
    desc: 'Thương cảng sầm uất từ thế kỷ 16–17 tại Quảng Nam, còn giữ nguyên nhà cổ, Chùa Cầu Nhật Bản và những hàng đèn lồng lung linh về đêm. Hội An là Di sản văn hóa thế giới của UNESCO.',
  },
  'sa-pa': {
    name: 'Sa Pa',
    img: '/images/sa-pa.jpg',
    desc: 'Thị trấn vùng cao ở Lào Cai, nổi tiếng với ruộng bậc thang, khí hậu mát mẻ quanh năm và bản làng người H\'Mông, Dao. Từ đây có thể chinh phục đỉnh Fansipan, nóc nhà Đông Dương.',
  },
  'mekong': {
    name: 'Đồng bằng sông Cửu Long',
    img: '/images/mekong.jpg',
    desc: 'Vựa lúa và trái cây lớn nhất cả nước với hệ thống sông ngòi chằng chịt. Du khách có thể đi thuyền tham quan chợ nổi Cái Răng, thưởng thức trái cây tại vườn và nghe đờn ca tài tử.',
  },
};

const stats = {
  'ha-noi': {
    name: 'Thủ đô Hà Nội',
    img: '/images/thu-do-ha-noi.jpg',
    desc: 'Thủ đô nghìn năm tuổi, trung tâm chính trị và văn hóa của cả nước. Giữa lòng thành phố là Hồ Hoàn Kiếm với Tháp Rùa cổ kính, cùng nhiều di tích như Văn Miếu – Quốc Tử Giám, trường đại học đầu tiên của Việt Nam.',
  },
  'dien-tich': {
    name: 'Diện tích ~331.000 km²',
    img: '/images/dien-tich.jpg',
    fit: 'contain',
    bg: '#fdf5d8',
    desc: 'Lãnh thổ hình chữ S trải dài khoảng 1.650 km từ Bắc vào Nam, với đường bờ biển hơn 3.260 km. Phần lớn diện tích là đồi núi, xen kẽ những đồng bằng màu mỡ như đồng bằng sông Hồng và sông Cửu Long.',
  },
  'dan-so': {
    name: 'Dân số ~100 triệu người',
    img: '/images/dan-so.jpg',
    pos: 'center 15%',
    desc: 'Việt Nam thuộc nhóm các nước đông dân nhất thế giới và đứng thứ ba Đông Nam Á. Người Việt yêu quý áo dài, trang phục truyền thống thanh lịch thể hiện nét đẹp dịu dàng của phụ nữ Việt.',
  },
  'dan-toc': {
    name: '54 dân tộc anh em',
    img: '/images/dan-toc.jpg',
    pos: 'center 25%',
    desc: 'Người Kinh chiếm đa số, cùng 53 dân tộc thiểu số sinh sống khắp cả nước. Người Thái ở vùng Tây Bắc nổi tiếng với áo cỏm cài cúc bạc, khăn piêu thêu tay và điệu múa xòe, được UNESCO ghi danh là di sản văn hóa phi vật thể.',
  },
};

const modal = document.getElementById('info-modal');
const imgEl = document.getElementById('info-img');
const titleEl = document.getElementById('info-title');
const descEl = document.getElementById('info-desc');

function openInfo(item) {
  imgEl.src = item.img;
  imgEl.alt = `Hình ảnh ${item.name}`;
  imgEl.style.objectFit = item.fit || '';
  imgEl.style.objectPosition = item.pos || '';
  imgEl.style.background = item.bg || '';
  titleEl.textContent = item.name;
  descEl.textContent = item.desc;
  modal.showModal();
}

document.querySelectorAll('[data-dish]').forEach((btn) => {
  btn.addEventListener('click', () => openInfo(dishes[btn.dataset.dish]));
});

document.querySelectorAll('[data-place]').forEach((btn) => {
  btn.addEventListener('click', () => openInfo(places[btn.dataset.place]));
});

document.querySelectorAll('[data-stat]').forEach((btn) => {
  btn.addEventListener('click', () => openInfo(stats[btn.dataset.stat]));
});

modal.querySelector('.modal-close').addEventListener('click', () => modal.close());

modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.close();
});
