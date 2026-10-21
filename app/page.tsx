"use client";

import { useState } from "react";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  Bell,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Copy,
  FileText,
  Mail,
  MessageSquare,
  Play,
  Plus,
  Settings2,
  ShieldCheck,
  Sparkles,
  Truck,
  Webhook,
  Zap,
} from "lucide-react";

const initialSteps = [
  {
    id: 1,
    type: "trigger",
    label: "Nuevo pedido recibido",
    description: "Cuando llega un pedido al sistema",
    icon: Webhook,
    color: "blue",
  },
  {
    id: 2,
    type: "condition",
    label: "Comprobar los datos",
    description: "Verificar dirección y teléfono",
    icon: ShieldCheck,
    color: "purple",
  },
  {
    id: 3,
    type: "action",
    label: "Notificar al responsable",
    description: "Enviar un aviso si falta información",
    icon: Bell,
    color: "orange",
  },
];

const integrations = [
  { name: "Correo electrónico", detail: "Enviar y recibir avisos", icon: Mail },
  { name: "WhatsApp", detail: "Notificaciones y mensajes", icon: MessageSquare },
  { name: "Sistema de transporte", detail: "Pedidos y expediciones", icon: Truck },
  { name: "CRM", detail: "Clientes y seguimiento", icon: FileText },
];

export default function AutomatizacionPage() {
  const [steps, setSteps] = useState(initialSteps);
  const [running, setRunning] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [activeTab, setActiveTab] = useState("flujo");
  const [automationName, setAutomationName] = useState(
    "Validación automática de pedidos"
  );

  function runAutomation() {
    setRunning(true);
    setCompleted(false);

    setTimeout(() => {
      setRunning(false);
      setCompleted(true);
    }, 1300);
  }

  function addStep() {
    const nextId = Math.max(...steps.map((step) => step.id), 0) + 1;

    setSteps([
      ...steps,
      {
        id: nextId,
        type: "action",
        label: "Nueva acción automatizada",
        description: "Configura la siguiente tarea",
        icon: Zap,
        color: "green",
      },
    ]);
    setCompleted(false);
  }

  function removeLastStep() {
    if (steps.length > 1) {
      setSteps(steps.slice(0, -1));
      setCompleted(false);
    }
  }

  return (
    <main className="site-shell">
      <nav className="navbar">
        <a className="brand" href="#inicio">
          <span className="brand-mark">
            <Zap size={21} fill="currentColor" />
          </span>
          <span>
            <strong>TRANSPORT AI</strong>
            <small>AUTOMATIZACIÓN INTELIGENTE</small>
          </span>
        </a>

        <div className="nav-links">
          <a href="#soluciones">Soluciones</a>
          <a href="#flujo">Cómo funciona</a>
          <a href="#integraciones">Integraciones</a>
        </div>

        <a className="nav-cta" href="#contacto">
          Solicitar información <ArrowRight size={16} />
        </a>
      </nav>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="live-dot" />
            DEMO 07 · AUTOMATIZACIÓN DE PROCESOS
          </div>

          <h1>
            Menos tareas
            <br />
            repetitivas.
            <br />
            <span>Más control.</span>
          </h1>

          <p className="hero-description">
            Conecta aplicaciones, automatiza tareas y recibe avisos en el
            momento adecuado. Diseñamos flujos de trabajo adaptados a la forma
            en la que funciona tu empresa.
          </p>

          <div className="hero-actions">
            <a href="#flujo" className="button-primary">
              <Play size={17} fill="currentColor" />
              Explorar demostración
            </a>
            <a href="#integraciones" className="button-secondary">
              Ver integraciones <ArrowRight size={16} />
            </a>
          </div>

          <div className="hero-proof">
            <span>
              <CheckCircle2 size={17} /> Menos trabajo manual
            </span>
            <span>
              <CheckCircle2 size={17} /> Seguimiento centralizado
            </span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-glow" />
          <div className="dashboard-window">
            <div className="window-top">
              <div className="window-dots">
                <i />
                <i />
                <i />
              </div>
              <span>Panel de automatizaciones</span>
              <span className="window-status">
                <span className="live-dot" /> DEMO
              </span>
            </div>

            <div className="dashboard-body">
              <div className="dash-heading">
                <div>
                  <span className="muted-label">VISTA GENERAL</span>
                  <h3>Actividad del sistema</h3>
                </div>
                <span className="period-selector">
                  Últimos 7 días <ChevronDown size={14} />
                </span>
              </div>

              <div className="stats-grid">
                <div className="stat-card">
                  <span>Flujos creados</span>
                  <strong>12</strong>
                  <small className="stat-positive">+3 este mes</small>
                </div>
                <div className="stat-card">
                  <span>Tareas automatizadas</span>
                  <strong>1.284</strong>
                  <small className="stat-positive">Actividad de ejemplo</small>
                </div>
              </div>

              <div className="chart-card">
                <div className="chart-heading">
                  <span>Procesos ejecutados</span>
                  <strong>Actividad semanal</strong>
                </div>
                <div className="chart">
                  {[35, 54, 43, 72, 49, 84, 65, 95, 58, 77, 89, 68].map(
                    (height, index) => (
                      <div className="chart-column" key={index}>
                        <span style={{ height: `${height}%` }} />
                      </div>
                    )
                  )}
                </div>
                <div className="chart-labels">
                  <span>L</span><span>M</span><span>X</span><span>J</span>
                  <span>V</span><span>S</span><span>D</span>
                </div>
              </div>

              <div className="activity-card">
                <div className="activity-icon">
                  <Check size={17} />
                </div>
                <div>
                  <strong>Validación de pedidos</strong>
                  <span>Flujo de ejemplo · Simulación</span>
                </div>
                <span className="activity-tag">Preparado</span>
              </div>
            </div>
          </div>

          <div className="floating-card floating-top">
            <span className="floating-icon purple-bg">
              <Sparkles size={19} />
            </span>
            <span>
              <strong>Proceso inteligente</strong>
              <small>Reglas personalizables</small>
            </span>
          </div>

          <div className="floating-card floating-bottom">
            <span className="floating-icon green-bg">
              <CheckCircle2 size={19} />
            </span>
            <span>
              <strong>Seguimiento centralizado</strong>
              <small>Eventos y notificaciones</small>
            </span>
          </div>
        </div>
      </section>

      <section className="benefits" id="soluciones">
        <div className="benefit">
          <span className="benefit-icon blue-bg"><Zap size={22} /></span>
          <div>
            <h3>Automatiza tareas</h3>
            <p>Reduce acciones manuales y pasos repetitivos.</p>
          </div>
        </div>
        <div className="benefit">
          <span className="benefit-icon purple-bg"><Webhook size={22} /></span>
          <div>
            <h3>Conecta herramientas</h3>
            <p>Coordina la información entre tus aplicaciones.</p>
          </div>
        </div>
        <div className="benefit">
          <span className="benefit-icon orange-bg"><Bell size={22} /></span>
          <div>
            <h3>Actúa a tiempo</h3>
            <p>Define avisos para incidencias y tareas pendientes.</p>
          </div>
        </div>
      </section>

      <section className="workflow-section" id="flujo">
        <div className="section-heading">
          <div>
            <div className="eyebrow">CONSTRUCTOR VISUAL</div>
            <h2>Así funciona una automatización</h2>
            <p>
              Explora un flujo de ejemplo, añade pasos y ejecuta una
              simulación interactiva.
            </p>
          </div>
          <span className="demo-badge">
            <span className="live-dot" /> Entorno de demostración
          </span>
        </div>

        <div className="builder">
          <aside className="builder-sidebar">
            <div className="sidebar-title">
              <Settings2 size={18} />
              <strong>Configuración</strong>
            </div>

            <label htmlFor="automation-name">Nombre del flujo</label>
            <input
              id="automation-name"
              value={automationName}
              onChange={(event) => setAutomationName(event.target.value)}
            />

            <div className="sidebar-divider" />

            <span className="muted-label">ELEMENTOS DEL FLUJO</span>

            <div className="palette-item">
              <span className="palette-icon blue-bg"><Webhook size={17} /></span>
              <span><strong>Disparador</strong><small>Inicia un proceso</small></span>
            </div>
            <div className="palette-item">
              <span className="palette-icon purple-bg"><ShieldCheck size={17} /></span>
              <span><strong>Condición</strong><small>Comprueba una regla</small></span>
            </div>
            <div className="palette-item">
              <span className="palette-icon orange-bg"><Bell size={17} /></span>
              <span><strong>Acción</strong><small>Ejecuta una tarea</small></span>
            </div>

            <button className="add-step-button" onClick={addStep}>
              <Plus size={17} /> Añadir paso
            </button>

            <button
              className="remove-step-button"
              onClick={removeLastStep}
              disabled={steps.length <= 1}
            >
              Eliminar último paso
            </button>
          </aside>

          <div className="flow-canvas">
            <div className="canvas-top">
              <div>
                <span className="muted-label">FLUJO DE TRABAJO</span>
                <h3>{automationName || "Mi automatización"}</h3>
              </div>
              <span className="canvas-count">{steps.length} pasos</span>
            </div>

            <div className="flow-list">
              {steps.map((step, index) => {
                const StepIcon = step.icon;
                return (
                  <div className="flow-item-wrap" key={step.id}>
                    <div className="flow-node">
                      <span className={`node-icon ${step.color}-bg`}>
                        <StepIcon size={21} />
                      </span>
                      <div className="node-copy">
                        <span className="node-type">
                          {step.type === "trigger"
                            ? "DISPARADOR"
                            : step.type === "condition"
                              ? "CONDICIÓN"
                              : "ACCIÓN"}
                        </span>
                        <strong>{step.label}</strong>
                        <small>{step.description}</small>
                      </div>
                      <button
                        className="node-settings"
                        aria-label={`Configurar ${step.label}`}
                        onClick={() =>
                          setSteps(
                            steps.map((item) =>
                              item.id === step.id
                                ? {
                                    ...item,
                                    label:
                                      item.label === "Nueva acción automatizada"
                                        ? "Enviar notificación"
                                        : item.label,
                                    description:
                                      item.description === "Configura la siguiente tarea"
                                        ? "Notificar al equipo responsable"
                                        : item.description,
                                  }
                                : item
                            )
                          )
                        }
                      >
                        <Settings2 size={17} />
                      </button>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="flow-connector">
                        <span />
                        <ArrowDown size={16} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {completed && (
              <div className="simulation-result">
                <CheckCircle2 size={20} />
                <div>
                  <strong>Simulación completada</strong>
                  <p>
                    Se han recorrido {steps.length} pasos de ejemplo. No se
                    han enviado mensajes ni modificado sistemas externos.
                  </p>
                </div>
              </div>
            )}

            {running && (
              <div className="running-result">
                <span className="spinner" />
                Simulando el flujo de trabajo...
              </div>
            )}

            <div className="canvas-footer">
              <span><Activity size={16} /> Modo de prueba</span>
              <button
                className="run-button"
                onClick={runAutomation}
                disabled={running}
              >
                <Play size={16} fill="currentColor" />
                {running ? "Ejecutando..." : "Ejecutar simulación"}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="integrations-section" id="integraciones">
        <div className="section-heading integrations-heading">
          <div>
            <div className="eyebrow">ECOSISTEMA CONECTADO</div>
            <h2>Tus herramientas, coordinadas</h2>
            <p>
              Diseñamos integraciones según los sistemas que ya utiliza tu
              empresa.
            </p>
          </div>
        </div>

        <div className="integration-grid">
          {integrations.map((integration) => {
            const IntegrationIcon = integration.icon;
            return (
              <div className="integration-card" key={integration.name}>
                <span className="integration-icon">
                  <IntegrationIcon size={23} />
                </span>
                <div>
                  <h3>{integration.name}</h3>
                  <p>{integration.detail}</p>
                </div>
                <span className="integration-arrow">
                  <ArrowRight size={17} />
                </span>
              </div>
            );
          })}
        </div>

        <div className="integration-note">
          <Sparkles size={18} />
          <p>
            <strong>¿Utilizas otra herramienta?</strong> Podemos estudiar la
            integración con tu software mediante API, webhooks u otros métodos
            compatibles.
          </p>
        </div>
      </section>

      <section className="closing-section" id="contacto">
        <div className="closing-glow" />
        <div className="eyebrow">TRANSPORT AI · SOLUCIONES A MEDIDA</div>
        <h2>
          Tu empresa tiene su forma de trabajar.
          <br />
          <span>Tu automatización también debería.</span>
        </h2>
        <p>
          Cuéntanos qué tareas quieres simplificar y estudiaremos una solución
          adaptada a tus procesos.
        </p>
        <a
          className="button-primary closing-button"
          href="https://wa.me/34659980603?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20automatizaci%C3%B3n%20de%20procesos%20con%20Transport%20AI."
          target="_blank"
          rel="noreferrer"
        >
          Hablar con Transport AI <ArrowRight size={17} />
        </a>
        <div className="closing-footnote">
          <ShieldCheck size={15} /> Cada proyecto se define según las
          necesidades y sistemas del cliente.
        </div>
      </section>

      <footer className="footer">
        <a className="brand footer-brand" href="#inicio">
          <span className="brand-mark"><Zap size={18} fill="currentColor" /></span>
          <strong>TRANSPORT AI</strong>
        </a>
        <span>Automatización inteligente para empresas.</span>
        <a href="https://transport-ai-web.vercel.app/">Web principal <ArrowRight size={14} /></a>
      </footer>
    </main>
  );
}
