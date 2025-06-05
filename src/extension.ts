import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

export function activate(context: vscode.ExtensionContext) {

  const disposable = vscode.commands.registerCommand('agency-empire.startGame', () => {
    // สร้าง Webview Panel
    const panel = vscode.window.createWebviewPanel(
      'agencyEmpireGame', // internal identifier for the webview
      'Agency Empire',    
      vscode.ViewColumn.One, // เปิดในคอลัมน์แรก
      {
        enableScripts: true,
        // อนุญาตให้ Webview โหลดไฟล์จากโฟลเดอร์ media
        localResourceRoots: [vscode.Uri.file(path.join(context.extensionPath, 'media'))]
      }
    );

    // อ่านไฟล์ media/index.html
    const htmlPath = path.join(context.extensionPath, 'media', 'index.html');
    let html = fs.readFileSync(htmlPath, 'utf8');

    // แปลง placeholder {{media}} ให้เป็น webview URI จริง
    const mediaUri = panel.webview.asWebviewUri(
      vscode.Uri.file(path.join(context.extensionPath, 'media'))
    );
    html = html.replace(/{{media}}/g, mediaUri.toString());

    panel.webview.html = html;
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
