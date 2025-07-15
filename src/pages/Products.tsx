<TabsContent value="swarm" className="space-y-12">
  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
    <FeatureCard
      title="Plug & Earn"
      description="Run the Swarm node app on your PC, Mac, or mobile. Start earning $NLOV instantly—no crypto or coding skills required."
      icon={<Zap className="h-6 w-6" />}
      alwaysActive
    />
    <FeatureCard
      title="Solana-Powered Rewards"
      description="All rewards and payouts are on-chain, fast, and transparent. Withdraw your $NLOV anytime."
      icon={<Server className="h-6 w-6" />}
      alwaysActive
    />
    <FeatureCard
      title="Leaderboard & Bonuses"
      description="Compete globally. Top contributors win bonus rewards—track your stats live."
      icon={<Network className="h-6 w-6" />}
      alwaysActive
    />
    <FeatureCard
      title="Secure & Private"
      description="No personal data required. All compute jobs are sandboxed and encrypted for your safety."
      icon={<Shield className="h-6 w-6" />}
      alwaysActive
    />
  </div>

  {/* Option 1: Browser-Based Swarm */}
  <div className="relative py-12">
    <div className="relative z-10 glass-card p-8 rounded-xl border border-#0361DA/10 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">
        How to Join the Swarm (Browser)
      </h2>
      <ol className="space-y-6 mb-8 list-decimal list-inside">
        <li>
          <span className="font-medium">Register in Your Browser:</span>{" "}
          <a
            href="https://swarm.neurolov.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            swarm.neurolov.ai
          </a>
        </li>
        <li>
          <span className="font-medium">Connect Your Wallet</span>
        </li>
        <li>
          <span className="font-medium">Scan Your Device</span>
        </li>
        <li>
          <span className="font-medium">Add & Register Device</span>
        </li>
        <li>
          <span className="font-medium">Start Swarming</span>
        </li>
      </ol>
      <div className="text-center">
        <Button
          variant="neon"
          size="lg"
          onClick={() =>
            window.open("https://swarm.neurolov.ai", "_blank", "noopener,noreferrer")
          }
        >
          Join the Swarm
        </Button>
      </div>
    </div>
  </div>

  {/* Option 2: Node Installation */}
  <div className="glass-card p-8 rounded-xl border border-#0361DA/10 max-w-lg mx-auto">
    <h3 className="text-2xl font-bold mb-4">Monetize Your Hardware</h3>
    <p className="text-muted-foreground mb-6">
      Turn your idle computing resources into a passive income stream. Join our swarm
      network as a provider and earn NLOV tokens.
    </p>
    <div className="space-y-4 mb-6">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-#0361DA/10 rounded-full flex items-center justify-center text-#0361DA">
          1
        </div>
        <div>
          <h4 className="font-medium">Install Node Software</h4>
          <p className="text-sm text-muted-foreground">
            Simple setup on Windows, Mac, or Linux
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-#0361DA/10 rounded-full flex items-center justify-center text-#0361DA">
          2
        </div>
        <div>
          <h4 className="font-medium">Configure Resources</h4>
          <p className="text-sm text-muted-foreground">
            Choose what to share and when
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-#0361DA/10 rounded-full flex items-center justify-center text-#0361DA">
          3
        </div>
        <div>
          <h4 className="font-medium">Earn NLOV Tokens</h4>
          <p className="text-sm text-muted-foreground">
            Get paid automatically as you contribute
          </p>
        </div>
      </div>
    </div>
    <div className="text-center">
      <Button
        variant="neon"
        size="lg"
        onClick={() =>
          window.open("https://swarm.neurolov.ai", "_blank", "noopener,noreferrer")
        }
      >
        Join the Swarm
      </Button>
    </div>
  </div>
</TabsContent>
