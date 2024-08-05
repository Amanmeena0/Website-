const Announcements = () => (
    <div className="bg-gray-700 p-6 mt-4 rounded">
      <h3 className="text-yellow-400 text-xl font-semibold">Safety Tips</h3>
      <p className="mt-2 text-left">
        Three factors must be present for a crime to occur: desire, ability, and opportunity...
      </p>
      <ul className="mt-2 text-left list-disc list-inside">
        <li>Always lock up your home before leaving and do not hide your house keys outdoors.</li>
        <li>Have keys ready and in your hand for immediate use when you return home.</li>
        <li>Do not answer personal questions about your home...</li>
        <li>Avoid mail theft by obtaining a locked mailbox...</li>
        <li>Do not give out your personal information...</li>
        <li>Plan your route ahead of time. Never walk alone at night...</li>
        <li>Use well-lit streets, not dark alleys or bushy areas.</li>
      </ul>
    </div>
  );
  
  export default Announcements;