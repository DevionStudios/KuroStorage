# KuroStorage

This is a completely decentralized filestorage with secure encryption and sharing capabilities. It is built on the Internet Computer.

## Running the project locally

If you want to test your project locally, you can use the following commands:

```bash
# Starts the replica, running in the background
dfx start --background

# Deploys your canisters to the replica and generates your candid interface
dfx deploy
```

Once the job completes, your application will be available at `http://localhost:4943?canisterId={asset_canister_id}`.

If you have made changes to your backend canister, you can generate a new candid interface with

```bash
npm run generate
```

at any time. This is recommended before starting the frontend development server, and will be run automatically any time you run `dfx deploy`.

If you are making frontend changes, you can start a development server with

```bash
npm start
```

Which will start a server at `http://localhost:8080`, proxying API requests to the replica at port 4943.

## Future Scope

The project can be extended in the following ways-

- to make a platform like cloudinary which is completely decentralized based on the ICP chain.
- to let users update their uploaded files and delete them as well.
- to add network firewalls to prevent unauthorized access to the files.

## Example Images And Videos

We have given some of our example images. <br>

- [Home Page](./examples/1.png)
- [Wallet Modal](./examples/2.png)
- [Youtube Link](https://youtu.be/pe2tJfgDNuE)

#### Note on frontend environment variables

If you are hosting frontend code somewhere without using DFX, you may need to make one of the following adjustments to ensure your project does not fetch the root key in production:

- set`DFX_NETWORK` to `ic` if you are using Webpack
- use your own preferred method to replace `process.env.DFX_NETWORK` in the autogenerated declarations
  - Setting `canisters -> {asset_canister_id} -> declarations -> env_override to a string` in `dfx.json` will replace `process.env.DFX_NETWORK` with the string in the autogenerated declarations
- Write your own `createActor` constructor
