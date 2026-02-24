# vapix-echo-acap
ACAP app of VAPIX testing tool

## ⚠️ Disclaimer

🧑‍💻 **Personal Project**  
This work is done in my personal capacity and has no relation to my employer or any organization I am affiliated with.

## Prerequisites

1. Install dependencies:
   ```bash
   cd scalar
   npm install
   ```

2. Create `.env.production` file in the `scalar` directory with the following content:
   ```
   ASSET_PREFIX=/local/vapix_echo/
   ```

## Usage

### Installing the ACAP on Axis Camera

1. Build the ACAP package (see Build section below)
2. Log in to your Axis camera's web interface
3. Go to **Settings → Apps**
4. Click **Add app** and select the `.eap` file from the `build` directory
5. Click **Install** and follow the prompts

### Opening the Settings Page

1. After installation, go to **Settings → Apps**
2. Find **VAPIX Echo** in the list and click it
3. The settings page will open where you can configure the application

## Build

### Quick Start

Run the build script:

```bash
./build.sh
```

The compiled ACAP package will be in the `./build` directory.

### Detailed Build Process

The build consists of two steps:

1. **Build the scalar (frontend)**
   ```bash
   cd scalar
   npm run build
   cd ..
   ```

2. **Build the ACAP package using Docker**
   ```bash
   docker build --tag t .
   docker cp $(docker create t):/opt/app build
   ```

The first step compiles the frontend assets, and the second step packages them into an ACAP application using a Docker container.
