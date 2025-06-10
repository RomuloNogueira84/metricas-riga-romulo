import http from 'http';
import { getMetrics } from './metrics.js';

const PORT = 3000;

function start() {
    const server = http.createServer((req, res) => {
        if (req.url === '/metrics') {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(getMetrics());
        } else {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end("Estou vencendo, o trabalho está progredindo. Riga, obrigado pelo ensinamento!");
        }
    });

    server.listen(PORT, () => {
        console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
}



export { start };

//O arquivo server.js contém a lógica principal do nosso servidor HTTP, que escuta requisições e responde com mensagens ou métricas do sistema.



