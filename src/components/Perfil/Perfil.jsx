function Perfil({ nome, cidade, resumo }) {
  return (
    <article className="sobre__texto">
      <p>
        Oi, eu sou davi nogueira{nome}, de {cidade}. {resumo}
      </p>
    </article>
  )
}

export default Perfil