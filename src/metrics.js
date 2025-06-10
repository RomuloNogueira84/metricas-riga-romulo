let requestCount = 0;

export function getMetrics() {
    requestCount++;
    return `# Atenção request_count Total de requisições recebidas\n# TIPO request_count contador\nrequest_count ${requestCount}\n`;
}
