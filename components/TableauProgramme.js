// components/TableauProgramme.js
'use client';

import { useState } from 'react';
import { calculer } from '@/lib/calculProgramme';

export default function TableauProgramme() {
  const [nombrejour, setNombrejour] = useState(7);
  const tab = calculer(nombrejour);

  return (
    <div className="py-4 md:py-8 mx-auto max-w-7xl" >
      <div className="mb-6 text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">جدول البرنامج</h1>
        <p className="text-gray-600">عرض الجدول للأيام القادمة</p>
      </div>

      <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200 mb-8" dir="rtl">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gradient-to-r from-cyan-600 to-cyan-700">
            <tr>
              <th className="px-4 py-3 text-right text-xs md:text-sm font-medium text-white uppercase tracking-wider">النوع</th>
              <th className="px-4 py-3 text-right text-xs md:text-sm font-medium text-white uppercase tracking-wider">الوقت</th>
              <th className="px-4 py-3 text-right text-xs md:text-sm font-medium text-white uppercase tracking-wider">الاسم</th>
              <th className="px-4 py-3 text-right text-xs md:text-sm font-medium text-white uppercase tracking-wider">اليوم</th>
              <th className="px-4 py-3 text-right text-xs md:text-sm font-medium text-white uppercase tracking-wider">التاريخ</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tab.map((e, i) => (
              <tr 
                key={i} 
                className={i === 0 ? 'bg-green-50 font-semibold' : 'hover:bg-gray-50 transition-colors duration-150'}
              >
                <td className="px-4 py-3 whitespace-nowrap text-sm md:text-base text-gray-800 text-center">
                  <span className={`px-2 py-1 rounded-full text-xs ${e.type === 'نوع1' ? 'bg-cyan-100 text-cyan-800' : 'bg-gray-100 text-gray-800'}`}>
                    {e.type}
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm md:text-base text-gray-800 text-center">
                  {i === 0 && e.time === '-' ? (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      حاليا
                    </span>
                  ) : (
                    e.time
                  )}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm md:text-base text-gray-800 text-center">{e.name}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm md:text-base text-gray-800 text-center">{e.day}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm md:text-base text-gray-800 text-center">{e.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center">
        <button
          className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:from-green-700 hover:to-green-800 flex items-center"
          onClick={() => setNombrejour((prev) => prev + 8)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          إضافة 8 أيام
        </button>
      </div>
    </div>
  );
}