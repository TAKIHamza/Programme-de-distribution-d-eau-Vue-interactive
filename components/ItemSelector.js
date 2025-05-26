// components/ItemSelector.js
'use client';

import { useState, useMemo } from 'react';
import { calculer } from '@/lib/calculProgramme';

export default function ItemSelector() {
  const [selectedName, setSelectedName] = useState(null);
  const data = useMemo(() => calculer(10), []);
  
  const uniqueNames = [...new Set(data.map(item => item.name))];
  const filteredItems = selectedName ? data.filter(item => item.name === selectedName) : [];

  return (
    <div className=" mx-auto py-6 mt-10" dir="rtl">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2 text-gray-800">قائمة الأسماء</h1>
        <p className="text-gray-600">اختر اسمًا لعرض التفاصيل</p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {uniqueNames.map((name) => (
          <button
            key={name}
            onClick={() => setSelectedName(name)}
            className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 ${
              selectedName === name
                ? 'bg-gradient-to-r bg-cyan-600  text-white shadow-lg transform scale-105'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 shadow-sm'
            }`}
          >
            {name}
          </button>
        ))}
      </div>

      {selectedName && (
        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-gradient-to-r bg-cyan-600 p-4">
            <h2 className="text-2xl font-bold text-white text-center">{selectedName}</h2>
          </div>
          
          <ul className="divide-y divide-gray-100">
            {filteredItems.map((item, idx) => (
              <li key={idx} className="p-5 hover:bg-gray-50 transition-colors duration-200">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">اليوم</p>
                    <p className="font-semibold">{item.day}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">التاريخ</p>
                    <p className="font-semibold">{item.date}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">الوقت</p>
                    <p className="font-semibold">{item.time}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">النوع</p>
                    <p className="font-semibold">{item.type}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          
          {filteredItems.length === 0 && (
            <div className="p-8 text-center text-gray-500">
              لا توجد بيانات متاحة
            </div>
          )}
        </div>
      )}
    </div>
  );
}