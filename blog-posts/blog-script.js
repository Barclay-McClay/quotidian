fetch('./blog-data.json')
  .then(response => response.json())
  .then(data => {
    const container = document.querySelector('.grid-container');

    data.posts.sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date
    data.posts.forEach(post => {
      renderPost(post, container);
    });

  });

function renderPost(post, container) {
  let item = document.createElement('div');
  item.className = 'grid-item';

  let link = document.createElement('a'); // New anchor tag
  link.href = '../'+post.url; // Link to the post

  let image = document.createElement('img');
  image.src = `./blog-images/${post.image}`;
  image.className = 'blog-img';
  
  let overlay = document.createElement('div');
  overlay.className = 'overlay';

  let title = document.createElement('h2');
  title.innerText = post.title;
  title.className = 'post-title';
  
  let date = document.createElement('p');
  date.innerText = post.date;
  date.className = 'post-date';

  overlay.append(title, date);

  link.append(image, overlay); // Append image and overlay to link instead of item

  item.append(link); // Append the link to item

  container.appendChild(item);
}