const Features = () => {
  return (
    <section id="features" className="bg-gray-50 dark:bg-darkBlue1">
      {/* Features Container */}
      <div className="container mx-auto px-6 pb-32">
        {/* First Row */}
        <div className="flex flex-col space-y-24 text-center md:flex-row md:space-y-0">
          {/* Item-1 */}
          <div className="flex flex-col items-center space-y-2 md:w-1/2">
            <div className="mb-6 flex h-24 items-center justify-center">
              <img src="/icon-access-anywhere.svg" alt="access anywhere" />
            </div>
            <h2 className="text-xl font-bold">Access your files, anywhere</h2>
            <p className="max-w-md">
              The ability to use a smartphone, tablet, or computer to access your account means your files follow you
              everywhere.
            </p>
          </div>
          {/* Item-2 */}
          <div className="flex flex-col items-center space-y-2 md:w-1/2">
            <div className="mb-6 flex h-24 items-center justify-center">
              <img src="/icon-security.svg" alt="access anywhere" />
            </div>
            <h2 className="text-xl font-bold">Security you can trust</h2>
            <p className="max-w-md">
              2-factor authentication and user-controlled encryption are just a couple of the security features we allow
              to help secure your files.
            </p>
          </div>
        </div>
        {/* Second Row */}
        <div className="mt-28 flex flex-col space-y-24 text-center md:flex-row md:space-y-0">
          {/* Item-3 */}
          <div className="flex flex-col items-center space-y-2 md:w-1/2">
            <div className="mb-6 flex h-24 items-center justify-center">
              <img src="/icon-collaboration.svg" alt="access anywhere" />
            </div>
            <h2 className="text-xl font-bold">Real-time collaboration</h2>
            <p className="max-w-md">
              Securely share files and folders with friends, family and colleagues for live collaboration. No email
              attachments required.
            </p>
          </div>
          {/* Item-4 */}
          <div className="flex flex-col items-center space-y-2 md:w-1/2">
            <div className="mb-6 flex h-24 items-center justify-center">
              <img src="/icon-any-file.svg" alt="access anywhere" />
            </div>
            <h2 className="text-xl font-bold">Store any type of file</h2>
            <p className="max-w-md">
              Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types
              to be securely stored and shared.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Features
