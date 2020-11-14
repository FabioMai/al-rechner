export default function Card({ heading, p, id }) {
  return (
    <>
      <div class="card">
        <img
          class="card-image"
          src="images/vector-card-1.svg"
          alt="alternative"
        />
        <div class="card-body">
          <h4 class="card-title">{heading}</h4>
          <p>{p}</p>
          <div class="form-group">
            <div class="row d-flex justify-content-center align-items-center">
              <input id={`card-a-${id}`} class="form-control-input"></input>
              <label class="label-control" for={`card-a-${id}`}>
                ha
              </label>
              <a class="btn-solid-reg popup-with-move-anim">Details</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
