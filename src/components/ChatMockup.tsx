export default function ChatMockup() {
  return (
    <div className="relative mx-auto w-[320px] sm:w-[360px]">
      {/* Phone frame */}
      <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-black/10 border border-gray-200 p-3">
        {/* Screen */}
        <div className="bg-[#F8F7F4] rounded-[2rem] overflow-hidden">
          {/* Status bar */}
          <div className="flex items-center justify-between px-6 pt-4 pb-2">
            <span className="text-xs font-semibold text-gray-800">9:41</span>
            <div className="flex items-center gap-1">
              <div className="w-4 h-2.5 rounded-sm border border-gray-600 flex items-center justify-end pr-px">
                <div className="w-2.5 h-1.5 bg-green-500 rounded-sm" />
              </div>
            </div>
          </div>

          {/* Chat header */}
          <div className="flex items-center gap-3 px-5 py-3 bg-white border-b border-gray-100">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <div>
              <div className="font-semibold text-sm text-gray-900">BookAI Assistant</div>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                <span className="text-xs text-gray-500">Online now</span>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="px-4 py-4 space-y-3 min-h-[360px]">
            {/* Bot message */}
            <div className="flex gap-2 max-w-[85%]">
              <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-emerald-600 text-[10px] font-bold">B</span>
              </div>
              <div className="chat-bubble-bot px-4 py-2.5">
                <p className="text-sm text-gray-800 leading-relaxed">Hello! I&apos;m BookAI, your scheduling assistant. How can I help you today? 👋</p>
              </div>
            </div>

            {/* User message */}
            <div className="flex justify-end">
              <div className="chat-bubble-user px-4 py-2.5 max-w-[80%]">
                <p className="text-sm leading-relaxed">Hi! I need to book an appointment with Dr. Smith for next week</p>
              </div>
            </div>

            {/* Bot message */}
            <div className="flex gap-2 max-w-[85%]">
              <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-emerald-600 text-[10px] font-bold">B</span>
              </div>
              <div className="chat-bubble-bot px-4 py-2.5">
                <p className="text-sm text-gray-800 leading-relaxed">I&apos;d be happy to help! Dr. Smith has the following available slots next week:</p>
                <div className="mt-2 space-y-1.5">
                  <div className="bg-white rounded-lg px-3 py-2 border border-gray-200 text-xs font-medium text-gray-700">📅 Mon, Mar 3 — 10:00 AM</div>
                  <div className="bg-white rounded-lg px-3 py-2 border border-emerald-200 bg-emerald-50 text-xs font-medium text-emerald-700">📅 Wed, Mar 5 — 2:30 PM</div>
                  <div className="bg-white rounded-lg px-3 py-2 border border-gray-200 text-xs font-medium text-gray-700">📅 Thu, Mar 6 — 11:00 AM</div>
                </div>
              </div>
            </div>

            {/* User message */}
            <div className="flex justify-end">
              <div className="chat-bubble-user px-4 py-2.5 max-w-[80%]">
                <p className="text-sm leading-relaxed">Wednesday at 2:30 works!</p>
              </div>
            </div>

            {/* Bot confirmation */}
            <div className="flex gap-2 max-w-[85%]">
              <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-emerald-600 text-[10px] font-bold">B</span>
              </div>
              <div className="chat-bubble-bot px-4 py-2.5">
                <p className="text-sm text-gray-800 leading-relaxed">✅ Booked! Your appointment with Dr. Smith is confirmed for <strong>Wed, Mar 5 at 2:30 PM</strong>. You&apos;ll receive a reminder 24 hours before.</p>
              </div>
            </div>
          </div>

          {/* Input bar */}
          <div className="px-4 pb-4">
            <div className="flex items-center gap-2 bg-white rounded-full border border-gray-200 px-4 py-2.5">
              <input type="text" placeholder="Type a message..." className="flex-1 text-sm bg-transparent outline-none text-gray-600 placeholder:text-gray-400" readOnly />
              <button className="w-8 h-8 rounded-full bg-[#1A1A1A] flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute -top-4 -right-4 w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center rotate-12 shadow-sm">
        <span className="text-lg">📅</span>
      </div>
      <div className="absolute -bottom-3 -left-3 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center -rotate-12 shadow-sm">
        <span className="text-lg">🌍</span>
      </div>
    </div>
  );
}
