const dishes = {
  'pho': {
    name: 'Phở',
    img: '/images/pho.svg',
    desc: 'Món nước nổi tiếng nhất Việt Nam, gồm bánh phở mềm trong nước dùng hầm xương bò trong và thơm mùi quế, hồi, gừng nướng. Ăn kèm thịt bò tái hoặc chín, hành lá và rau thơm.',
  },
  'bun-cha': {
    name: 'Bún chả',
    img: '/images/bun-cha.svg',
    desc: 'Đặc sản Hà Nội với chả thịt heo nướng than hoa thơm lừng, ăn cùng bún tươi, rau sống và bát nước chấm chua ngọt vừa vị.',
  },
  'banh-mi': {
    name: 'Bánh mì',
    img: '/images/banh-mi.svg',
    desc: 'Ổ bánh mì giòn rụm kẹp pate, thịt nguội, đồ chua, dưa leo và rau mùi. Món ăn đường phố tiện lợi được yêu thích khắp thế giới.',
  },
  'goi-cuon': {
    name: 'Gỏi cuốn',
    img: '/images/goi-cuon.svg',
    desc: 'Bánh tráng cuốn tôm, thịt luộc, bún và rau sống tươi mát, chấm với nước mắm pha hoặc tương đậu phộng. Nhẹ nhàng, thanh đạm và ít dầu mỡ.',
  },
  'cao-lau': {
    name: 'Cao lầu',
    img: '/images/cao-lau.svg',
    desc: 'Đặc sản phố cổ Hội An với sợi mì vàng dai, thịt xíu, rau sống và bánh đa giòn, chan rất ít nước dùng đậm đà.',
  },
  'com-tam': {
    name: 'Cơm tấm',
    img: '/images/com-tam.svg',
    desc: 'Món ăn đặc trưng của Sài Gòn, làm từ gạo tấm dẻo thơm, ăn kèm sườn nướng, trứng ốp la, đồ chua và nước mắm ngọt.',
  },
  'ca-phe': {
    name: 'Cà phê sữa đá',
    img: '/images/ca-phe.svg',
    desc: 'Cà phê pha phin đậm đà hòa cùng sữa đặc ngọt béo, rót trên đá lạnh. Thức uống quen thuộc của người Việt mỗi buổi sáng.',
  },
};

const modal = document.getElementById('dish-modal');
const imgEl = document.getElementById('dish-img');
const titleEl = document.getElementById('dish-title');
const descEl = document.getElementById('dish-desc');

document.querySelectorAll('[data-dish]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const dish = dishes[btn.dataset.dish];
    imgEl.src = dish.img;
    imgEl.alt = `Hình minh họa món ${dish.name}`;
    titleEl.textContent = dish.name;
    descEl.textContent = dish.desc;
    modal.showModal();
  });
});

modal.querySelector('.modal-close').addEventListener('click', () => modal.close());

modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.close();
});
