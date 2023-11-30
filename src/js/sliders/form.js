const formBlock = () => {
  const form = document.querySelector('.contact__form-content');
  const spinner = form.querySelector('.spinner');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    sendData();
  });
  function sendData() {
    spinner.classList.add('active');
    const formData = new FormData(form);
    fetch('https://formsubmit.co/support@belecono.com', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.text())
      .then(data => {
        spinner.classList.remove('active');
        document.querySelector('.contact__form').classList.toggle('success');
      })
      .catch(error => {
        console.error('Error sending data:', error);
      });

  }

}
export default formBlock;