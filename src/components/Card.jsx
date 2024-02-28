function Card (props) {
  return (
      <div className="card" style={{width: 18 + 'em', marginBottom: 1.5 + 'em'}}>
          {props.children}
              <div className="card-body">
                  <h5 className="card-title">{props.title}</h5>
                  <p className="card-text">{props.description}</p>
                  <a href="https://ya.ru/" className="btn btn-primary">{props.desc_button}</a>
              </div>
      </div>
  )
}

export default Card
