const like = document.querySelector('.like');
const likeCount = document.querySelector('.like-counter');

const postImg = document.querySelector('.post-img');

let likeStatus = 0;

function updateLike(e) {
  if (likeStatus) {
    if (e.target.className !== 'post-img') {
      likeCount.textContent = parseFloat(likeCount.textContent) - 1;
      likeStatus = 0;
    }
  } else {
    likeCount.textContent = parseFloat(likeCount.textContent) + 1;
    likeStatus = 1;
  }
}

postImg.addEventListener('dblclick', (e) => {
  updateLike(e);
});
like.addEventListener('click', (e) => {
  updateLike(e);
});

const comInput = document.querySelector('.comment-input');
const comBtn = document.querySelector('.comment-btn');
const comments = document.querySelector('.comments');

comBtn.addEventListener('click', () => {
  if (comInput.value) {
    const p = document.createElement('p');
    const delBtn = document.createElement('button');
    const wrapper = document.createElement('div');
    wrapper.className = 'wrapper-5';
    delBtn.textContent = 'delete comment';
    p.textContent = comInput.value;
    comInput.value = '';
    comInput.focus();
    wrapper.appendChild(p);
    p.after(delBtn);
    comments.appendChild(wrapper);

    delBtn.addEventListener('click', () => {
      comments.removeChild(wrapper);
    });
  }
});
