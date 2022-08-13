export default function popupError() {
  document.body.insertAdjacentHTML(
    'beforeEnd',
    `<div class="modal_mask">
      <div class="modal">
        <div class="modal_msg">Номер карты указан неверно</div>
        <button class="close_btn">Закрыть</button>
      </div>
    </div>`,
  );
  const clsModalBtn = document.querySelector('.close_btn');
  clsModalBtn.addEventListener('click', (ev) => ev.target.closest('div.modal_mask').remove());
}
