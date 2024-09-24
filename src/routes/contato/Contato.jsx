import './Contato.css';
import Swal from 'sweetalert2';

function Contato() {
  const alertCtt = (event) => {
    event.preventDefault(); // Previne o envio do formulário

    // Pega o formulário
    const form = event.target.closest('form');

    // Verifica se o formulário é válido
    if (form.checkValidity()) {
      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });
    } else {
      // Se o formulário não for válido, mostre a mensagem de erro padrão de HTML5
      form.reportValidity();
    }
  };

  return (
    <>
      <section className="container-contato">
        <div className="text-ctt">
          <h1>Entre em contato!</h1>
        </div>
        <form action="">
          <div className="form-row">
            <label htmlFor="first-name">Primeiro nome *</label>
            <input type="text" id="first-name" name="first-name" required />
          </div>
          <div className="form-row">
            <label htmlFor="last-name">Ultimo nome *</label>
            <input type="text" id="last-name" name="last-name" required />
          </div>
          <div className="form-row">
            <label htmlFor="email">Email *</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-row">
            <label htmlFor="phone">Telefone</label>
            <input type="tel" id="phone" name="phone" />
          </div>
          <div className="form-message">
            <label htmlFor="message">Mensagem</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <div className="form-row">
            <button onClick={alertCtt}>Enviar</button>
          </div>
        </form>
        <div className="text-ctt">
          <p>A Formula E quer te escutar!</p>
        </div>
      </section>
    </>
  );
}

export default Contato;
