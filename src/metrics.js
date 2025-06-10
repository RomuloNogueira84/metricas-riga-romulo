let requestCount = 0;

export function getMetrics() {
    requestCount++;
    return `# Atenção request_count Total de requisições recebidas\n# TIPO request_count contador\nrequest_count ${requestCount}\n`;
}

//O arquivo metrics.js é responsável por fornecer métricas sobre as requisições feitas ao servidor. Ele mantém um contador de requisições e retorna essas informações de forma estruturada.
