import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Política de Privacidade - GOLFFOX Mobile',
    description: 'Política de Privacidade do aplicativo GOLFFOX Mobile em conformidade com LGPD',
};

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    Política de Privacidade - GOLFFOX Mobile
                </h1>
                <p className="text-sm text-gray-600 mb-8">
                    <strong>Última atualização:</strong> 09 de fevereiro de 2026
                </p>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introdução</h2>
                    <p className="text-gray-700 leading-relaxed">
                        A Synvolt Soluções Tecnológicas ("nós", "nosso" ou "GOLFFOX") respeita sua privacidade e está comprometida em proteger seus dados pessoais. Esta Política de Privacidade explica como coletamos, usamos, armazenamos e compartilhamos suas informações quando você usa o aplicativo móvel GOLFFOX.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-4">
                        Esta política está em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018) e as políticas do Google Play.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Dados que Coletamos</h2>

                    <h3 className="text-xl font-semibold text-gray-700 mb-3">2.1 Dados Fornecidos Diretamente por Você</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                        <li><strong>Informações de Cadastro:</strong> Nome, e-mail, telefone, CPF, foto de perfil</li>
                        <li><strong>Informações de Autenticação:</strong> Credenciais de login, dados biométricos (Face ID, impressão digital)</li>
                        <li><strong>Comprovantes:</strong> Fotografias de documentos e comprovantes de abastecimento</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-700 mb-3">2.2 Dados Coletados Automaticamente</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                        <li><strong>Localização GPS:</strong> Coordenadas de latitude e longitude em tempo real e histórico de rotas</li>
                        <li><strong>Dados do Dispositivo:</strong> Modelo, sistema operacional, identificador único, versão do app</li>
                        <li><strong>Dados de Uso:</strong> Interações com o app, funcionalidades utilizadas, tempo de uso</li>
                        <li><strong>Dados de Check-in:</strong> Registro de passageiros, horários, NFC tags lidos</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-700 mb-3">2.3 Dados de Terceiros</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li><strong>Google Maps:</strong> Informações de endereço e geocodificação reversa</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Como Usamos Seus Dados</h2>
                    <p className="text-gray-700 mb-3">Utilizamos seus dados pessoais para:</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                        <li><strong>Operação do Serviço:</strong> Rastreamento de veículos, motoristas e passageiros em tempo real</li>
                        <li><strong>Segurança:</strong> Acionamento de botão de pânico e respostas a emergências</li>
                        <li><strong>Gestão Operacional:</strong> Check-in de passageiros, registro de viagens, controle de abastecimento</li>
                        <li><strong>Comunicação:</strong> Notificações push sobre status de viagens e eventos importantes</li>
                        <li><strong>Melhoria do Serviço:</strong> Análise de uso para otimização e desenvolvimento de novas funcionalidades</li>
                        <li><strong>Conformidade Legal:</strong> Cumprimento de obrigações legais e regulatórias</li>
                    </ul>
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                        <p className="text-gray-700"><strong>Base Legal (LGPD):</strong></p>
                        <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
                            <li>Execução de contrato (Art. 7º, V)</li>
                            <li>Legítimo interesse (Art. 7º, IX)</li>
                            <li>Consentimento expresso quando aplicável (Art. 7º, I)</li>
                        </ul>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Compartilhamento de Dados</h2>
                    <p className="text-gray-700 mb-3">Seus dados podem ser compartilhados com:</p>

                    <h3 className="text-xl font-semibold text-gray-700 mb-3">4.1 Empresa Contratante</h3>
                    <p className="text-gray-700 mb-4">Sua empresa empregadora ou contratante tem acesso aos dados operacionais (localização, check-ins, viagens)</p>

                    <h3 className="text-xl font-semibold text-gray-700 mb-3">4.2 Prestadores de Serviço</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                        <li><strong>Supabase (PostgreSQL):</strong> Armazenamento de dados em nuvem</li>
                        <li><strong>Google Maps Platform:</strong> Serviços de mapeamento e geocodificação</li>
                        <li><strong>Expo (EAS):</strong> Infraestrutura de build e distribuição</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-700 mb-3">4.3 Autoridades</h3>
                    <p className="text-gray-700 mb-4">Quando exigido por lei ou ordem judicial</p>

                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                        <p className="text-gray-700 font-semibold">Não vendemos seus dados pessoais a terceiros.</p>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Armazenamento e Segurança</h2>

                    <h3 className="text-xl font-semibold text-gray-700 mb-3">5.1 Localização dos Dados</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                        <li>Dados armazenados em servidores na nuvem (Supabase)</li>
                        <li>Localização: Brasil (quando possível)</li>
                        <li>Backup criptografado</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-700 mb-3">5.2 Medidas de Segurança</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                        <li>Criptografia TLS/SSL para transmissão</li>
                        <li>Criptografia de dados sensíveis em repouso</li>
                        <li>Autenticação biométrica (Face ID, impressão digital)</li>
                        <li>Controle de acesso baseado em funções (RBAC)</li>
                        <li>Sincronização offline segura</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-700 mb-3">5.3 Retenção de Dados</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li><strong>Dados operacionais:</strong> Retidos enquanto você estiver ativo no serviço</li>
                        <li><strong>Dados de localização:</strong> Histórico de até 90 dias</li>
                        <li><strong>Dados de exclusão:</strong> 30 dias após solicitação de exclusão</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Seus Direitos (LGPD)</h2>
                    <p className="text-gray-700 mb-3">Você tem os seguintes direitos sobre seus dados pessoais:</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                        <li><strong>Confirmação e Acesso:</strong> Confirmar se tratamos seus dados e acessá-los (Art. 18, I e II)</li>
                        <li><strong>Correção:</strong> Corrigir dados incompletos, inexatos ou desatualizados (Art. 18, III)</li>
                        <li><strong>Anonimização, Bloqueio ou Eliminação:</strong> Solicitar anonimização, bloqueio ou eliminação de dados (Art. 18, IV)</li>
                        <li><strong>Portabilidade:</strong> Receber seus dados em formato estruturado (Art. 18, V)</li>
                        <li><strong>Revogação do Consentimento:</strong> Retirar consentimento a qualquer momento (Art. 18, IX)</li>
                        <li><strong>Oposição:</strong> Opor-se ao tratamento realizado com base em legítimo interesse (Art. 18, § 2º)</li>
                    </ul>
                    <div className="bg-green-50 border-l-4 border-green-400 p-4">
                        <p className="text-gray-700 font-semibold mb-2">Como Exercer Seus Direitos:</p>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li>Pelo app: Configurações → Privacidade e Dados</li>
                            <li>Por e-mail: privacidade@golffox.com.br</li>
                            <li>Prazo de resposta: até 15 dias úteis</li>
                        </ul>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Dados de Crianças e Adolescentes</h2>
                    <p className="text-gray-700">
                        O GOLFFOX <strong>não é destinado a menores de 18 anos</strong>. Não coletamos intencionalmente dados de crianças ou adolescentes. Se tomarmos conhecimento de coleta inadvertida, excluiremos os dados imediatamente.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Contato</h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-700 mb-2">Controlador de Dados</h3>
                            <p className="text-gray-700">
                                <strong>Nome:</strong> Synvolt Soluções Tecnológicas<br />
                                <strong>E-mail:</strong> contato@golffox.com.br
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-700 mb-2">Encarregado de Dados (DPO)</h3>
                            <p className="text-gray-700">
                                <strong>E-mail:</strong> privacidade@golffox.com.br
                            </p>
                        </div>
                    </div>

                    <div className="mt-6">
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">Autoridade Nacional</h3>
                        <p className="text-gray-700">
                            Em caso de dúvidas não resolvidas, você pode contatar a Autoridade Nacional de Proteção de Dados (ANPD):<br />
                            <a href="https://www.gov.br/anpd" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                www.gov.br/anpd
                            </a>
                        </p>
                    </div>
                </section>

                <section className="mb-8 bg-gray-100 p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Resumo em Linguagem Simples</h2>

                    <div className="space-y-4">
                        <div>
                            <h3 className="font-semibold text-gray-700 mb-2">O que coletamos:</h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                <li>Sua localização GPS (para rastreamento)</li>
                                <li>Fotos que você tira (comprovantes)</li>
                                <li>Dados de check-in (passageiros, horários)</li>
                                <li>Informações do seu perfil (nome, e-mail)</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-700 mb-2">Por que coletamos:</h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                <li>Para o app funcionar (rastreamento, check-in)</li>
                                <li>Para sua segurança (botão de pânico)</li>
                                <li>Para melhorar o serviço</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-700 mb-2">Seus direitos:</h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                <li>Ver seus dados</li>
                                <li>Corrigir dados errados</li>
                                <li>Excluir sua conta e dados</li>
                                <li>Baixar seus dados</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <footer className="text-center text-sm text-gray-600 pt-8 border-t border-gray-200">
                    <p><strong>Versão:</strong> 1.0.0</p>
                    <p><strong>Data de Vigência:</strong> 09/02/2026</p>
                    <p><strong>Idioma:</strong> Português (Brasil)</p>
                </footer>
            </div>
        </div>
    );
}
