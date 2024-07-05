<script lang="ts">
  import ArticleBase from "$lib/ArticleBase.svelte";
  // &lt; < less than
  // &gt; > greater than
  // &lt; &gt;
  // &#123; { curly open
  // &#125; } curly close
  // &#123; &#125;
</script>

<ArticleBase
  titleHeading="(Neo)Vim is Cool"
  titleSubheading="But also complicated."
>
  <section class="space-y-4">
    <section class="space-y-4">
      <h2
        id="normal-mode"
        class="heading-size-2"
      >
        Normal Mode
      </h2>

      <section class="space-y-4">
        <h3
          id="jumps"
          class="heading-size-3"
        >
          Jumps
        </h3>
      </section>
      <hr />

      <section class="space-y-4">
        <h3
          id="marks"
          class="heading-size-3"
        >
          Marks
        </h3>
      </section>
      <hr />

      <section class="space-y-4">
        <h3
          id="registers"
          class="heading-size-3"
        >
          Registers
        </h3>
      </section>
      <hr />

      <section class="space-y-4">
        <h3
          id="folds"
          class="heading-size-3"
        >
          Folds
        </h3>

        <p>
          Fold level &gt; <code>foldlevel</code> will be closed. Zero (default) will
          close all folds. Local to window.
        </p>

        <p>
          Fold with lines &lt; <code>foldminlines</code> will always be open. Default
          1.
        </p>

        <p>
          Currently using
          <a
            href="https://github.com/kevinhwang91/nvim-ufo"
            title="nvim-ufo GitHub repo"
            target="_blank"
          >
            nvim-ufo
          </a> to manage folds.
        </p>

        <section class="space-y-4">
          <h4
            id="opening-and-closing-folds"
            class="heading-size-4"
          >
            Opening and Closing Folds
          </h4>

          <dl>
            <div>
              <dt><kbd>z</kbd><kbd>o</kbd></dt>
              <dt>
                <code>&#123;count&#125;</code>
                <kbd>z</kbd><kbd>o</kbd>
              </dt>
              <dd>Open one fold under the cursor.</dd>
              <dd>Open <code>count</code> fold levels under the cursor.</dd>
            </div>

            <div>
              <dt><kbd>z</kbd><kbd>O</kbd></dt>
              <dd>Open all folds under the cursor.</dd>
            </div>

            <div>
              <dt><kbd>z</kbd><kbd>c</kbd></dt>
              <dt>
                <code>&#123;count&#125;</code>
                <kbd>z</kbd><kbd>c</kbd>
              </dt>
              <dd>Close one fold under the cursor.</dd>
              <dd>Close <code>count</code> folds under the cursor.</dd>
            </div>

            <div>
              <dt><kbd>z</kbd><kbd>C</kbd></dt>
              <dd>Close all folds under the cursor.</dd>
            </div>
          </dl>

          <dl>
            <div>
              <dt><kbd>z</kbd><kbd>a</kbd></dt>
              <dt>
                <code>&#123;count&#125;</code>
                <kbd>z</kbd><kbd>a</kbd>
              </dt>
              <dd>Toggle one fold under the cursor.</dd>
              <dd>Toggle <code>count</code> fold levels under the cursor.</dd>
            </div>

            <div>
              <dt><kbd>z</kbd><kbd>A</kbd></dt>
              <dd>Toggle all folds under the cursor.</dd>
            </div>

            <div>
              <dt><kbd>z</kbd><kbd>v</kbd></dt>
              <dd>
                View cursor line. Unfold until the line in which the cursor is
                located is not folded.
              </dd>
            </div>

            <div>
              <dt><kbd>z</kbd><kbd>x</kbd></dt>
              <dd>
                Update folds. Undo manually opened and closed folds. Re-apply
                <code>foldlevel</code>, then do <kbd>z</kbd><kbd>v</kbd>. Forces
                recomputing folds.
              </dd>
            </div>

            <div>
              <dt><kbd>z</kbd><kbd>X</kbd></dt>
              <dd>
                Undo manually opened and closed folds. Re-apply
                <code>foldlevel</code>. Forces recomputing folds.
              </dd>
            </div>
          </dl>

          <dl>
            <div>
              <dt><kbd>z</kbd><kbd>m</kbd></dt>
              <dd>fold more. Decrease <code>foldlevel</code>.</dd>
            </div>

            <div>
              <dt><kbd>z</kbd><kbd>M</kbd></dt>
              <dd>
                Fold most. Set <code>foldlevel</code> to zero, i.e. close all folds.
              </dd>
            </div>

            <div>
              <dt><kbd>z</kbd><kbd>r</kbd></dt>
              <dd>Fold reduce. Increase <code>foldlevel</code>.</dd>
            </div>

            <div>
              <dt><kbd>z</kbd><kbd>R</kbd></dt>
              <dd>
                Fold reduce to minimum. Set <code>foldlevel</code> to max, i.e. open
                all folds.
              </dd>
            </div>
          </dl>

          <dl>
            <div>
              <dt><kbd>z</kbd><kbd>i</kbd></dt>
              <dd>Toggle <code>foldenable</code>.</dd>
            </div>

            <!-- <div>
              <dt><kbd>z</kbd><kbd>n</kbd></dt>
              <dd>
                Fold none. <code>foldenable off</code>. All folds will be open.
              </dd>
            </div> -->

            <!-- <div>
              <dt><kbd>z</kbd><kbd>N</kbd></dt>
              <dd>
                fold normal. <code>foldenable on</code>. All folds will be as
                they were before.
              </dd>
            </div> -->
          </dl>
        </section>

        <section class="space-y-4">
          <h4
            id="moving-over-folds"
            class="heading-size-4"
          >
            Moving Over Folds
          </h4>

          <dl>
            <div>
              <dt><kbd>[</kbd><kbd>z</kbd></dt>
              <dd>Move to the start of containing open fold.</dd>
            </div>

            <div>
              <dt><kbd>]</kbd><kbd>z</kbd></dt>
              <dd>Move to the end of containing open fold.</dd>
            </div>

            <div>
              <dt><kbd>z</kbd><kbd>k</kbd></dt>
              <dd>Move upwards to the end of the previous fold.</dd>
            </div>

            <div>
              <dt><kbd>z</kbd><kbd>j</kbd></dt>
              <dd>Move downwards to the start of the next fold.</dd>
            </div>
          </dl>
        </section>
      </section>
      <hr />

      <section class="space-y-4">
        <h3
          id="search"
          class="heading-size-3"
        >
          Search
        </h3>

        <dl>
          <div>
            <dt>
              <kbd>/</kbd><code>&#123;some text&#125;</code><kbd>Enter</kbd>
            </dt>
            <dd>Search forward for <code>some text</code>.</dd>
          </div>

          <div>
            <dt>
              <kbd>n</kbd>
            </dt>
            <dd>Move cursor to next result.</dd>
          </div>

          <div>
            <dt>
              <kbd>N</kbd>
            </dt>
            <dd>Move cursor to previous result.</dd>
          </div>

          <div>
            <dt>
              <kbd><kbd>Ctrl</kbd><span>+</span><kbd>l</kbd></kbd>
            </dt>
            <dt>
              <code>:mod[e]</code>
            </dt>
            <dd>Clear and redraw screen.</dd>
            <dd>
              Clears search highlights (<code>:noh[lsearch]</code>) and updates
              diffs (<code>:dif[fupdate]</code>).
            </dd>
          </div>
        </dl>
      </section>
      <hr />

      <section class="space-y-4">
        <h3
          id="buffers"
          class="heading-size-3"
        >
          Buffers
        </h3>

        <section class="space-y-4">
          <h4
            id="buffers-create"
            class="heading-size-4"
          >
            Create
          </h4>

          <dl></dl>
        </section>

        <section class="space-y-4">
          <h4
            id="buffers-close"
            class="heading-size-4"
          >
            Close
          </h4>

          <dl></dl>
        </section>

        <section class="space-y-4">
          <h4
            id="buffers-focus"
            class="heading-size-4"
          >
            Focus
          </h4>

          <dl>
            <div>
              <dt>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>^</kbd></kbd>
              </dt>
              <dd>
                Edit alternate file in current window. Usually last edited file.
              </dd>
            </div>

            <div>
              <dt>
                <code>&#123;count&#125;</code>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>^</kbd></kbd>
              </dt>
              <dd>Edit <code>count</code> buffer in current window.</dd>
            </div>
          </dl>
        </section>
      </section>
      <hr />

      <section class="space-y-4">
        <h3
          id="windows"
          class="heading-size-3"
        >
          Windows
        </h3>

        <div>
          <p>
            Creating a window will fail if there is not enough room. Every
            window needs at least one screen line and column, sometimes more.
          </p>
        </div>

        <div>
          <p>Windows are numbered starting from 1.</p>
          <p>Windows are numbered from top-left to bottom-right.</p>
        </div>

        <section class="space-y-4">
          <h4
            id="windows-create"
            class="heading-size-4"
          >
            Create
          </h4>

          <dl>
            <div>
              <dt>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd>
                <kbd>s</kbd>
              </dt>
              <dt>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd>
                <kbd>S</kbd>
              </dt>
              <dt>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>s</kbd></kbd>
              </dt>
              <dt>
                <code>:[N]sp[lit] [++opt] [+cmd] &#123;file&#125;</code>
              </dt>

              <dd>Split horizontally.</dd>
              <dd>
                Make the new window <code>N</code> rows high.
              </dd>
              <dd>Opens same file buffer if not specified.</dd>
              <dd>
                Note: <kbd><kbd>Ctrl</kbd><span>+</span><kbd>s</kbd></kbd> does
                not work on all terminals and might block further input. Use
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>q</kbd></kbd> to get going
                again.
              </dd>
            </div>

            <div>
              <dt>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd>
                <kbd>v</kbd>
              </dt>
              <dt>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>v</kbd></kbd>
              </dt>
              <dt><code>:[N]vs[plit] [++opt] [+cmd] &#123;file&#125;</code></dt>

              <dd>Split vertically.</dd>
              <dd>Make the new window <code>N</code> columns wide.</dd>
              <dd>Opens same file buffer if not specified.</dd>
            </div>

            <!-- <div>
              <dt>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd>
                <kbd>n</kbd>
              </dt>
              <dt>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>n</kbd></kbd>
              </dt>
              <dt><code>:[N]new [++opt] [+cmd] &#123;file&#125;</code></dt>

              <dd>New horizontal split window.</dd>
              <dd>Make new window <code>N</code> rows high.</dd>
              <dd>New empty buffer or open file.</dd>
              <dd>
                <code>:[N]vnew [++opt] [+cmd] &#123;file&#125;</code> for vertical
                split.
              </dd>
            </div> -->

            <div>
              <dt>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd>
                <kbd>^</kbd>
              </dt>
              <dt>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>^</kbd></kbd>
              </dt>

              <dd>Open alternate file in horizontal split.</dd>
              <dd>
                Matches behaviour of
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>^</kbd></kbd>
                .
              </dd>
            </div>
          </dl>
        </section>

        <section class="space-y-4">
          <h4
            id="windows-close"
            class="heading-size-4"
          >
            Close
          </h4>

          <dl>
            <div>
              <dt>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd>
                <kbd>c</kbd>
              </dt>

              <dd>Close the current window.</dd>
              <dd>
                Fails if there is only one window.
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd>
                <kbd>q</kbd>
                will close last window and exit, so this is safer.
              </dd>
              <dd>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>c</kbd></kbd>
                does not work, because the
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>c</kbd></kbd>
                cancels the command.
              </dd>
            </div>

            <div>
              <dt>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd>
                <kbd>o</kbd>
              </dt>
              <dt>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>o</kbd></kbd>
              </dt>

              <dd>Keep only active window, closing all others.</dd>
            </div>
          </dl>
        </section>

        <section class="space-y-4">
          <h4
            id="windows-focus"
            class="heading-size-4"
          >
            Focus
          </h4>

          <p>Cursor will cycle from end to start, and vice versa.</p>

          <dl>
            <div>
              <dt>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd>
                <kbd>w</kbd>
              </dt>
              <dt>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd>
              </dt>

              <dd>Move cursor one window forward (down/right).</dd>
            </div>

            <div>
              <dt>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd>
                <kbd>W</kbd>
              </dt>

              <dd>Move cursor one window backward (up/left).</dd>
            </div>

            <div>
              <dt>
                <code>&#123;count&#125;</code>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd>
                <kbd>w</kbd>
              </dt>
              <dt>
                <code>&#123;count&#125;</code>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd>
              </dt>
              <dt>
                <code>&#123;count&#125;</code>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd>
                <kbd>W</kbd>
              </dt>

              <dd>
                Move cursor to window number <code>count</code>.
              </dd>
              <dd>
                If <code>count</code> &gt; number of windows, go to last window.
              </dd>
            </div>

            <div>
              <dt>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd>
                <kbd>h j k l</kbd>
              </dt>
              <dt>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>h j k l</kbd></kbd>
              </dt>

              <dd>Move cursor to window left/right/above/below current one.</dd>
            </div>

            <div>
              <dt>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd>
                <kbd>t b</kbd>
              </dt>
              <dt>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>t b</kbd></kbd>
              </dt>

              <dd>Move cursor to top-left/bottom-right window.</dd>
            </div>
          </dl>
        </section>

        <section class="space-y-4">
          <h4
            id="windows-move"
            class="heading-size-4"
          >
            Move
          </h4>

          <dl>
            <div>
              <dt>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd>
                <kbd>r</kbd>
              </dt>
              <dt>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>r</kbd></kbd>
              </dt>

              <dd>Rotate windows downwards/rightwards.</dd>
              <dd>The cursor remains in the same window.</dd>
              <dd>
                This only works within the row or column of windows that the
                current window is in.
              </dd>
            </div>

            <div>
              <dt>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd>
                <kbd>R</kbd>
              </dt>

              <dd>Rotate windows upwards/leftwards.</dd>
              <dd>The cursor remains in the same window.</dd>
              <dd>
                This only works within the row or column of windows that the
                current window is in.
              </dd>
            </div>

            <div>
              <dt>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd>
                <kbd>x</kbd>
              </dt>
              <dt>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>x</kbd></kbd>
              </dt>

              <dd>Exchange current window with next one.</dd>
              <dd>
                If there is no next window, exchange with previous window.
              </dd>
              <dd>The cursor is put in the other window.</dd>
              <dd>
                When vertical and horizontal window splits are mixed, the
                exchange is only done in the row or column of windows that the
                current window is in.
              </dd>
            </div>

            <div>
              <dt>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd>
                <kbd>H J K L</kbd>
              </dt>

              <dd>
                Move current window to far left/right/top/bottom, and use full
                height/width.
              </dd>
            </div>

            <div>
              <dt>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd>
                <kbd>T</kbd>
              </dt>

              <dd>Move the current window to a new tab page.</dd>
              <dd>
                Fails if there is only one window in the current tab page.
              </dd>
            </div>
          </dl>
        </section>

        <section class="space-y-4">
          <h4
            id="windows-resize"
            class="heading-size-4"
          >
            Resize
          </h4>

          <dl>
            <div>
              <dt>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd>
                <kbd>=</kbd>
              </dt>
              <dd>Equalize width and height of all windows.</dd>
            </div>

            <div>
              <dt>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd>
                <kbd>_</kbd>
              </dt>
              <dd>Maximize height of the active window.</dd>
            </div>

            <div>
              <dt>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd>
                <kbd>|</kbd>
              </dt>
              <dd>Maximize width of the active window.</dd>
            </div>

            <div>
              <dt>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd>
                <kbd>- +</kbd>
              </dt>
              <dd>
                Incrementally decrease/increase active window height.
              </dd>
            </div>

            <div>
              <dt>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd>
                <kbd>&lt; &gt;</kbd>
              </dt>
              <dd>
                Incrementally decrease/increase active window width.
              </dd>
            </div>
          </dl>
        </section>
      </section>
      <hr />

      <section class="space-y-4">
        <h3
          id="tabs"
          class="heading-size-3"
        >
          Tabs
        </h3>

        <p>Tabs are numbered starting from 1.</p>

        <section class="space-y-4">
          <h4
            id="tabs-create"
            class="heading-size-4"
          >
            Create
          </h4>

          <dl>
            <div>
              <dt><code>:tabe[dit] &#123;filename&#125;</code></dt>
              <dd>Open <code>filename</code> in a new tab.</dd>
            </div>
          </dl>
        </section>

        <section class="space-y-4">
          <h4
            id="tabs-close"
            class="heading-size-4"
          >
            Close
          </h4>

          <dl>
            <div>
              <dt><code>:tabc[lose]</code></dt>
              <dd>Close the current tab page and all of its windows.</dd>
            </div>

            <div>
              <dt><code>:tabo[nly]</code></dt>
              <dd>Keep only the active tab page, closing all others.</dd>
            </div>
          </dl>
        </section>

        <section class="space-y-4">
          <h4
            id="tabs-focus"
            class="heading-size-4"
          >
            Focus
          </h4>

          <dl>
            <div>
              <dt><kbd>g</kbd><kbd>t</kbd></dt>
              <dd>Switch to the next tab page.</dd>
            </div>

            <div>
              <dt><kbd>g</kbd><kbd>T</kbd></dt>
              <dd>Switch to the previous tab page.</dd>
            </div>

            <div>
              <dt><code>&#123;count&#125;</code><kbd>g</kbd><kbd>t</kbd></dt>
              <dd>Switch to tab page number <code>count</code>.</dd>
            </div>
          </dl>
        </section>

        <section class="space-y-4">
          <h4
            id="tabs-move"
            class="heading-size-4"
          >
            Move
          </h4>

          <dl>
            <div>
              <dt><code>:tabmove</code></dt>
              <dd>Move current tab page to the end.</dd>
            </div>

            <div>
              <dt><code>:tabmove 0</code></dt>
              <dd>Move current tab page to the beginning.</dd>
            </div>

            <div>
              <dt>
                <code>:tabmove &#123;count&#125;</code>
              </dt>
              <dd>Move current tab page to position <code>count</code>.</dd>
            </div>
          </dl>
        </section>
      </section>
    </section>

    <hr />

    <section class="space-y-4">
      <h2
        id="terminal-mode"
        class="heading-size-2"
      >
        Terminal Mode
      </h2>

      <dl>
        <div>
          <dt>
            <code>:te[rminal]</code>
          </dt>
          <dd>Create new interactive shell.</dd>
        </div>

        <div>
          <dt>
            <kbd><kbd>Ctrl</kbd><span>+</span><kbd>\</kbd></kbd>
            <kbd><kbd>Ctrl</kbd><span>+</span><kbd>n</kbd></kbd>
          </dt>
          <dd>Return to Normal Mode.</dd>
        </div>
      </dl>
    </section>
    <hr />

    <section class="space-y-4">
      <h2
        id="lua"
        class="heading-size-2"
      >
        Lua
      </h2>
    </section>
    <hr />

    <section class="space-y-4">
      <h2
        id="lsps"
        class="heading-size-2"
      >
        LSPs
      </h2>
      <dl>
        <div>
          <dt><kbd>K</kbd></dt>

          <dd><code>vim.lsp.buf.hover()</code></dd>
        </div>
      </dl>
    </section>
    <hr />

    <section class="space-y-4">
      <h2
        id="diagnostics"
        class="heading-size-2"
      >
        Diagnostics
      </h2>

      <dl>
        <div>
          <dt><kbd>[</kbd><kbd>d</kbd></dt>

          <dd><code>vim.diagnostic.goto_prev()</code></dd>
        </div>

        <div>
          <dt><kbd>]</kbd><kbd>d</kbd></dt>

          <dd><code>vim.diagnostic.goto_next()</code></dd>
        </div>

        <div>
          <dt>
            <kbd><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd>
            <kbd>d</kbd>
          </dt>
          <dt>
            <kbd><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd>
            <kbd><kbd>Ctrl</kbd><span>+</span><kbd>d</kbd></kbd>
          </dt>

          <dd><code>vim.diagnostic.open_float()</code></dd>
        </div>
      </dl>
    </section>
    <hr />

    <section class="space-y-4">
      <h2
        id="notes"
        class="heading-size-2"
      >
        Notes
      </h2>

      <p>
        Shortcuts are sometimes written as <code>&lt;C-A&gt;</code> to mean: hold
        <kbd>Ctrl</kbd>, press and release <kbd>a</kbd>, release
        <kbd>Ctrl</kbd>. Same for other modifiers.
      </p>
      <p>
        Modifiers are not combined with uppercase, only lowercase, so
        <code>&lt;C-w&gt;</code> and <code>&lt;C-W&gt;</code> both mean
        <kbd><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd>.
      </p>
      <p>
        <code>&lt;CR&gt;</code> means "carriage return", i.e.
        <kbd>Enter</kbd>.
      </p>
      <p>
        <kbd>:</kbd> to switch to command line mode, where commands can be typed,
        and tab-completion is available.
      </p>

      <div>
        <p>A buffer is the in-memory text of a file.</p>
        <p>A window is a viewport on a buffer.</p>
        <p>A tab page is a collection of windows.</p>
      </div>
    </section>
  </section>
</ArticleBase>

<style lang="postcss">
  /* description list, term, details */
  dl {
    @apply space-y-2;
  }

  dt {
    @apply space-x-0.5;
    @apply mb-0.5;
  }

  dd {
    @apply ml-4;
  }
</style>
