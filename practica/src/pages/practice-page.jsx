import { CounterWidget } from '../features/counter/components/counter-widget';
import { ListContainer } from '../features/filterable-list/components/list-container';
import { DataDisplay } from '../features/async-request/components/data-display';

export const PracticePage = () => {
  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: '#f1f5f9',
        padding: '2rem 1.5rem',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        boxSizing: 'border-box'
      }}
    >
      <header
        style={{
          maxWidth: '1200px',
          margin: '0 auto 2rem',
          textAlign: 'center'
        }}
      >
        <h1
          style={{
            fontSize: '2rem',
            fontWeight: 800,
            color: '#0f172a',
            margin: '0 0 0.5rem'
          }}
        >
          Práctica de React - Arquitectura por Features
        </h1>
        <p style={{ color: '#64748b', margin: 0, fontSize: '1rem' }}>
          Ejercicios de estado, listas filtrables y peticiones asíncronas con renderizado condicional.
        </p>
      </header>

      <section
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem',
          alignItems: 'start'
        }}
      >
        <CounterWidget />
        <ListContainer />
        <DataDisplay />
      </section>
    </main>
  );
};

export default PracticePage;
