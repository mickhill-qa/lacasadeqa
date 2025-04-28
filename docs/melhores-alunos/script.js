async function getList() {
    let link = 'https://mickhill-qa.github.io/lacasadeqa/docs/melhores-alunos/lista.json'
    try {
        let response = await fetch(link)
        if (!response.ok) {
            throw new Error('Erro ao ler o arquivo JSON')
        }
        return await response.json()
    } catch (err) {
        console.error('Erro ao ler o arquivo JSON:', err)
    }
}

getList().then(data => {
    const lista_alunos = data.alunos
    lista_alunos.sort((a, b) => {
        if (a.nome < b.nome) return -1
        if (a.nome > b.nome) return 1
        return 0
    })
    //console.log(lista_alunos)

    const ol_html = document.getElementById('lista-alunos')

    lista_alunos.forEach(aluno => {
        const li_html = document.createElement('li')
        const a_html  = document.createElement('a')

        a_html.textContent = aluno.nome
        a_html.href        = aluno.linkedin
        a_html.target      = '_blank'

        li_html.appendChild(a_html)
        ol_html.appendChild(li_html)
    })
})