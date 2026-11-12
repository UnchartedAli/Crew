package main

import (
	"context"
	"os"
	"os/exec"
	"strings"
	"time"

	"github.com/UnchartedAli/Crew/internal/app/logging"
)

var crewScriptPath = "/usr/local/bin/crew"

func runManagedDatabaseMaintenance(ctx context.Context) {
	if !strings.EqualFold(strings.TrimSpace(os.Getenv("CREW_INSTALL_MODE")), "binary") {
		return
	}
	if _, err := os.Stat(crewScriptPath); err != nil {
		return
	}

	maintenanceCtx, cancel := context.WithTimeout(ctx, 90*time.Second)
	defer cancel()
	output, err := exec.CommandContext(maintenanceCtx, crewScriptPath, "database-maintenance").CombinedOutput()
	message := strings.TrimSpace(string(output))
	if err != nil {
		logging.Warnf(logging.ComponentRuntime, "managed database maintenance failed: %v output=%s", err, message)
		return
	}
	if message != "" {
		logging.Infof(logging.ComponentRuntime, "managed database maintenance: %s", message)
	}
}
