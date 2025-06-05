# Agency Simulation

**Agency Simulation** is a production-house–style management game that runs directly inside VS Code. Build your advertising agency, take on projects, hire employees, and manage finances—all within your favorite code editor!

---

## Support

If you find this extension useful and would like to support its development, consider buying me a coffee:

<a href="https://ko-fi.com/C0C71I6DF" target="_blank">
  <img height="36" style="border:0px;height:36px;" src="https://storage.ko-fi.com/cdn/kofi6.png?v=6" border="0" alt="Buy Me a Coffee at ko-fi.com" />
</a>


---

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Command Palette](#command-palette)
- [Screenshots](#screenshots)
- [Extension Settings](#extension-settings)
- [Contributing](#contributing)
- [Support](#support)
- [License](#license)

---

## Features

- **Interactive Agency Dashboard**  
  View available projects, in-progress tasks, and completed jobs in a clean, VS Code–themed interface.

- **Project Management**  
  • Generate new project opportunities  
  • Accept or reject incoming projects  
  • Track project timelines, budgets, and billing status  
  • Pay or collect deposits and invoices

- **Team & Hiring**  
  • Recruit and fire employees  
  • Track each employee’s skills, salary, and productivity  
  • Upgrade office capacity to expand your workforce

- **Financial Simulation**  
  • Manage your agency’s funds and reputation  
  • Pay daily salaries and operating costs  
  • Process billing, receive payments, and handle unexpected events

- **Random Events & Bonuses**  
  • Experience occasional random events (bonus payouts, equipment failures, power outages)  
  • Level up employee skills through surprise training opportunities

---

## Prerequisites

- **VS Code** (version 1.60.0 or higher)  
- **Node.js** (version 14.x or higher)  
- **npm** (comes bundled with Node.js)

---

## Installation

1. **Clone or download this repository**  
   ```bash
   git clone https://github.com/yourusername/agency-empire.git
   cd agency-empire
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Compile TypeScript (if applicable)**  
   ```bash
   npm run compile
   ```

4. **Launch the Extension in VS Code**  
   - Open this folder in VS Code:  
     ```bash
     code .
     ```  
   - Press `F5` to open a new Extension Development Host window with **Agency Simulation** loaded.

5. **(Optional) Package as a VSIX**  
   If you want to install this extension locally or share it:  
   ```bash
   npm install -g vsce
   vsce package
   ```  
   Then, install the generated `.vsix` file in VS Code via **Extensions: Install from VSIX...**.

---

## Usage

1. **Open the Command Palette**  
   Press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux) or <kbd>⌘</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (macOS).

2. **Start the Game**  
   Type and select:  
   ```
   Agency Simulation: Start Game
   ```  
   This will launch the “Agency Simulation” webview panel.

3. **Game Interface Overview**  
   - **Top Bar**: Shows your current funds (USD), reputation, office level, and in-game date.  
   - **Projects Pane**:  
     - **Available Projects**: New opportunities you can accept.  
     - **In Progress**: Projects you’ve accepted, showing progress bars and remaining days.  
     - **Completed Projects**: Finished or billed-out projects awaiting payment.  
   - **Team Pane**:  
     - **Your Employees**: Each card shows employee name, salary, and skills.  
     - **Hire Employee**: Click to open a modal and recruit new candidates.  
     - **Fire / Train**: Manage existing staff.  
   - **Upgrade Office**: Spend money to raise your office level and unlock higher employee capacity.  
   - **Notifications / Events**: Live activity feed, showing project completions, payments, random events, and more.

4. **Basic Gameplay Loop**  
   - **Generate New Projects**: Click “Find New Project” in the Projects Pane to see fresh leads.  
   - **Accept Projects**: Reviewing budget, timeline, and billing terms—accept by paying any required deposit.  
   - **Assign Employees**: Your hired employees automatically work on in-progress projects.  
   - **Monitor Progress**: Progress bars fill as days pass (game speed is configurable).  
   - **Billing & Payments**: When a project completes, click “Process Billing” to generate invoices. Wait for due dates, then collect payments.  
   - **Manage Finances**: Pay daily salaries and monthly operating costs. Watch out for random events that can boost or drain your funds.  
   - **Grow & Upgrade**: Invest profits back into hiring more employees, training them, or upgrading your office to expand capacity.

---

## Command Palette

Use **Command Palette** shortcuts to quickly access core commands:

- **Start Game**  
  ```  
  Ctrl+Shift+P → Agency Simulation: Start Game  
  ```

- **(Future Updates)**  
  - Toggle pause/play day cycles  
  - Manually advance days  
  - Export/Import save data

---

## Screenshots

Below are a few screenshots showing the in-game UI inside VS Code.  
_(Note: Replace the paths with your actual image locations in the repository.)_

1. **Main Dashboard**  
   ![Main Dashboard](https://github.com/banyapon/agency-empire/raw/main/images/screenshot1.png)  
   *Shows available projects, team roster, and notifications pane.*

2. **Project Details & Progress**  
   ![Project Details](https://github.com/banyapon/agency-empire/raw/main/images/screenshot2.png)  
   *Inspect project budget, timeline, billing terms, and accept or process billing.*

---

## Extension Settings

This extension does not yet contribute any custom settings.  
_(Future versions may allow you to tweak “gameSpeed,” “startingFunds,” and “randomEventProbability” via VS Code Settings.)_

---

## Contributing

Contributions, bug reports, and feature requests are welcome!  

1. Fork this repository  
2. Create a new branch (`git checkout -b feature/my-feature`)  
3. Commit your changes (`git commit -m "Add awesome feature"`)  
4. Push to your branch (`git push origin feature/my-feature`)  
5. Open a Pull Request and describe your changes

Please ensure your code follows the existing style, passes `npm run lint`, and that you update this README with any new instructions or screenshots.

---

## Support

If you find this extension useful and would like to support its development, consider buying me a coffee:

<a href="https://ko-fi.com/C0C71I6DF" target="_blank">
  <img height="36" style="border:0px;height:36px;" src="https://storage.ko-fi.com/cdn/kofi6.png?v=6" border="0" alt="Buy Me a Coffee at ko-fi.com" />
</a>

---

## License

This project is licensed under the [MIT License](./LICENSE). Feel free to use, modify, and distribute.

---

*Enjoy building your Agency Empire—right from within VS Code!*  
