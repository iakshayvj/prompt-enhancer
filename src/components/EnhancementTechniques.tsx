import React from 'react';
import { CheckCircle } from 'lucide-react';

interface EnhancementTechniquesProps {
  techniques: string[];
}

export function EnhancementTechniques({ techniques }: EnhancementTechniquesProps) {
  if (techniques.length === 0) return null;

  return (
    <div className="mb-4">
      <h3 className="text-sm font-medium text-gray-700 mb-2">
        Applied Techniques:
      </h3>
      <ul className="space-y-1">
        {techniques.map((technique, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
            {technique}
          </li>
        ))}
      </ul>
    </div>
  );
}