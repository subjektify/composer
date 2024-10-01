# Subjektify Composer

An advanced visual programming interface for creating, managing, and deploying decentralized applications using Subject-Oriented Programming (SOP).

## Overview

**Subjektify Composer** is a node-based visual editor designed to simplify the development of decentralized applications (dApps) on the blockchain. Inspired by Unreal Engine's Event Graphs, it provides an intuitive interface for both developers and non-developers to create, interact with, and manage **subjects**—modular components encapsulating state and behaviors—without writing code.

With seamless integration into the Subjektify ecosystem and direct interaction with the **Subject Universe**, Subjektify Composer enables users to:

- **Visually design subjects, behaviors, and event flows.**
- **Import and export subjects from the Subject Universe.**
- **Generate and preview smart contract code in real-time.**
- **Deploy contracts directly to blockchain networks.**
- **Interact with deployed subjects and listen to events.**
- **Utilize Web3 wallets for authentication and payments.**

## Features

- **Node-Based Visual Editor:** Create and connect nodes representing subjects, behaviors, events, and data flow.
- **Real-Time Code Generation:** View and edit generated smart contract code alongside the visual graph.
- **Custom Code Injection:** Advanced users can inject custom code within the visual workflow.
- **Web3 Wallet Integration:** Authenticate and manage transactions using wallets like MetaMask.
- **Event Subscription:** Listen to and interact with real-time events emitted by subjects.
- **Premium Features:** Access advanced functionalities through Web3 payments.
- **Subject Universe Integration:** Import existing subjects and publish new ones to the decentralized registry.
- **Deployment Assistance:** Deploy contracts directly from the Composer to various networks.

## Installation

### Prerequisites

- **Node.js** (version 18 or higher)
- **npm** or **yarn**
- **Web3 Wallet** (e.g., MetaMask) installed in your browser

### Clone the Repository

```bash
git clone https://github.com/subjektifylabs/subjektify-composer.git
cd subjektify-composer
```

### Install Dependencies

Using npm:

```bash
npm install
```

Or using yarn:

```bash
yarn install
```

### Start the Application

```bash
npm run start
```

Open your browser and navigate to `http://localhost:5173` to access the Composer.

---

## Usage

### Connecting Your Wallet

1. **Open Subjektify Composer** in your browser.
2. **Connect Wallet:** Click on the **Connect Wallet** button at the top right corner.
3. **Select Your Wallet:** Choose your preferred Web3 wallet (e.g., MetaMask).
4. **Authenticate:** Follow the prompts to connect and authenticate.

### Creating a New Project

1. **New Project:** Click on **File > New Project** in the top navigation bar.
2. **Project Name:** Enter a name for your project.
3. **Start Designing:** Begin adding nodes from the **Node Library**.

### Adding Nodes

1. **Open Node Library:** Located on the left sidebar.
2. **Drag and Drop:** Select a node (e.g., **Subject Node**, **Behavior Node**) and drag it onto the **Canvas**.
3. **Repeat:** Add as many nodes as needed to build your subject.

### Connecting Nodes

1. **Select Node Ports:** Click on an output port of one node.
2. **Draw Connection:** Drag to the input port of another node.
3. **Establish Connection:** Release to create the connection, indicating data flow or execution order.

### Configuring Nodes

1. **Select a Node:** Click on a node to highlight it.
2. **Property Panel:** Located on the right sidebar, it displays node properties.
3. **Edit Properties:** Modify attributes like names, data types, and parameters.
4. **Custom Code (Advanced):** Inject custom code if necessary.

### Previewing Generated Code

1. **Code Preview Tab:** Located at the bottom panel.
2. **View Code:** See real-time generated code corresponding to your visual design.
3. **Edit Code:** Advanced users can edit the code directly.

### Deploying Contracts

1. **Deploy Button:** Click on **Deploy** in the top navigation bar.
2. **Select Network:** Choose the target blockchain network (e.g., Ethereum Mainnet, Testnet).
3. **Review Details:** Verify the deployment details and gas fees.
4. **Confirm Deployment:** Sign the transaction using your connected wallet.
5. **Deployment Status:** Monitor the deployment progress and receive confirmation upon success.

### Interacting with Deployed Subjects

1. **Interaction Panel:** Access deployed subjects from the **Interaction** panel.
2. **Invoke Behaviors:** Execute functions or behaviors defined in your subject.
3. **Listen to Events:** Subscribe to events emitted by the subject for real-time updates.

### Importing from the Subject Universe

1. **Open Subject Universe Panel:** Located within the Composer.
2. **Search Subjects:** Browse or search for subjects to import.
3. **Preview:** View details and metadata of the subject.
4. **Import:** Click **Import** to add the subject to your project.

### Publishing to the Subject Universe

1. **Finalize Design:** Ensure your subject is ready for publication.
2. **Publish:** Click on **File > Publish to Universe**.
3. **Enter Metadata:** Provide necessary information like name, description, and tags.
4. **Sign Transaction:** Confirm and sign the publication transaction.
5. **Confirmation:** Receive a confirmation once the subject is successfully published.

---

## Premium Features

Access advanced functionalities through Web3 payments:

- **Advanced Nodes:** Specialized nodes for complex operations.
- **Real-Time Event Listening:** Subscribe to live events and receive instant notifications.
- **AI-Assisted Design:** Get suggestions and optimizations powered by AI (coming soon).
- **Collaboration Tools:** Work with team members in real-time (coming soon).
- **Deployment Assistance:** Priority support for deploying contracts to various networks.

### Accessing Premium Features

1. **Initiate Premium Action:** Attempt to use a premium feature within the Composer.
2. **Payment Prompt:** A dialog appears detailing the cost and benefits.
3. **Confirm Payment:** Approve the transaction using your connected Web3 wallet.
4. **Access Granted:** Upon transaction confirmation, the feature becomes available.

---

## Contributing

We welcome contributions from the community!

### How to Contribute

1. **Fork the Repository:** Click on the **Fork** button on GitHub.
2. **Clone Your Fork:**

   ```bash
   git clone https://github.com/your-username/subjektify-composer.git
   ```

3. **Create a Branch:**

   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make Changes:** Implement your enhancements or fixes.
5. **Commit Changes:**

   ```bash
   git commit -m "Add new feature X"
   ```

6. **Push to GitHub:**

   ```bash
   git push origin feature/your-feature-name
   ```

7. **Submit a Pull Request:** Open a pull request on the main repository.
