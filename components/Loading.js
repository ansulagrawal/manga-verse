import React from 'react';

export default function Loading() {
  return (
    <div class="flex w-full rounded overflow-hidden shadow-lg animate-pulse">
      <div class="w-1/3 bg-gray-300 h-24"></div>

      <div class="w-2/3 p-4 space-y-3">
        <div class="h-6 bg-gray-300 rounded"></div>
        <div class="h-4 bg-gray-300 rounded w-5/6"></div>
        <div class="h-4 bg-gray-300 rounded w-4/6"></div>
      </div>
    </div>
  );
}
