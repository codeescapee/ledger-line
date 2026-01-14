"use client";

export default function SystemDiagram() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <svg
        viewBox="0 0 400 300"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Workflow boxes with subtle animation */}
        <g className="animate-float-slow">
          <rect
            x="50"
            y="40"
            width="100"
            height="60"
            rx="4"
            fill="none"
            stroke="#1e293b"
            strokeWidth="2"
          />
          <text x="100" y="75" textAnchor="middle" fill="#1e293b" fontSize="14" fontWeight="500">
            Data
          </text>
        </g>

        <g className="animate-float-medium">
          <rect
            x="250"
            y="40"
            width="100"
            height="60"
            rx="4"
            fill="none"
            stroke="#1e293b"
            strokeWidth="2"
          />
          <text x="300" y="75" textAnchor="middle" fill="#1e293b" fontSize="14" fontWeight="500">
            Logic
          </text>
        </g>

        <g className="animate-float-slow">
          <rect
            x="50"
            y="200"
            width="100"
            height="60"
            rx="4"
            fill="none"
            stroke="#1e293b"
            strokeWidth="2"
          />
          <text x="100" y="235" textAnchor="middle" fill="#1e293b" fontSize="14" fontWeight="500">
            Workflow
          </text>
        </g>

        <g className="animate-float-medium">
          <rect
            x="250"
            y="200"
            width="100"
            height="60"
            rx="4"
            fill="none"
            stroke="#1e293b"
            strokeWidth="2"
          />
          <text x="300" y="235" textAnchor="middle" fill="#1e293b" fontSize="14" fontWeight="500">
            System
          </text>
        </g>

        {/* Connection lines */}
        <line
          x1="150"
          y1="70"
          x2="250"
          y2="70"
          stroke="#64748b"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          className="opacity-60"
        />
        <line
          x1="100"
          y1="100"
          x2="100"
          y2="200"
          stroke="#64748b"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          className="opacity-60"
        />
        <line
          x1="300"
          y1="100"
          x2="300"
          y2="200"
          stroke="#64748b"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          className="opacity-60"
        />
        <line
          x1="150"
          y1="230"
          x2="250"
          y2="230"
          stroke="#64748b"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          className="opacity-60"
        />

        {/* Central node */}
        <circle cx="200" cy="150" r="20" fill="#1e293b" className="animate-pulse-subtle" />
        <text x="200" y="155" textAnchor="middle" fill="white" fontSize="12" fontWeight="600">
          LL
        </text>
      </svg>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes pulse-subtle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 5s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        .animate-pulse-subtle {
          animation: pulse-subtle 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
