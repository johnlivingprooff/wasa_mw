const style = {
    fontFamily: 'Raleway, sans-serif',
    backgroundColor: '#005989',
    color: 'white',
    textAlign: 'center',
    padding: '5px 0 3px 0',
    position: 'relative',
    bottom: '0',
    width: '100%'
}

export default function Footer() {

    const year = new Date().getFullYear();

    return (
        <div style={style}>
            <p>Work And Study Abroad | © {year} All Rights Reserved.</p>
        </div>
    )
}