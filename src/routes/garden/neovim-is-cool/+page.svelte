<script lang="ts">
  import ArticleBase from "$lib/ArticleBase.svelte";
</script>

<ArticleBase
  titleHeading="(Neo)vim is Cool"
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
      <section class="space-y-4">
        <h3
          id="marks"
          class="heading-size-3"
        >
          Marks
        </h3>
      </section>
      <section class="space-y-4">
        <h3
          id="registers"
          class="heading-size-3"
        >
          Registers
        </h3>
      </section>
      <section class="space-y-4">
        <h3
          id="folds"
          class="heading-size-3"
        >
          Folds
        </h3>
      </section>

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
              <kbd>/</kbd><code>[some text]</code>
            </dt>
            <dd>Search forward for <code>[some text]</code>.</dd>
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

          <dl></dl>
        </section>

        <section class="space-y-4">
          <h4
            id="buffers-move"
            class="heading-size-4"
          >
            Move
          </h4>

          <dl></dl>
        </section>

        <section class="space-y-4">
          <h4
            id="buffers-resize"
            class="heading-size-4"
          >
            Resize
          </h4>

          <dl></dl>
        </section>
      </section>

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
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>s</kbd></kbd>
              </dt>
              <dt>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd>
                <kbd>s</kbd>
              </dt>
              <dd>Split horizontally.</dd>
              <dd>
                Note: C-s does not work on all terminals and might block further
                input. Use C-q to get going again.
              </dd>
            </div>

            <div>
              <dt>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>v</kbd></kbd>
              </dt>
              <dt>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd>
                <kbd>v</kbd>
              </dt>
              <dd>Split vertically.</dd>
            </div>

            <div>
              <dt>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>n</kbd></kbd>
              </dt>
              <dt>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd>
                <kbd>n</kbd>
              </dt>
              <dd>New window.</dd>
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
                Fails if there is only one window. C-w q will close last window
                and exit, so this is safer.
              </dd>
            </div>

            <div>
              <dt>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>o</kbd></kbd>
              </dt>
              <dt>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd>
                <kbd>o</kbd>
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
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd>
              </dt>
              <dt>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd>
                <kbd>w</kbd>
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
                <code>&#123;N&#125;</code>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd>
              </dt>
              <dt>
                <code>&#123;N&#125;</code>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd>
                <kbd>w</kbd>
              </dt>
              <dt>
                <code>&#123;N&#125;</code>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd>
                <kbd>W</kbd>
              </dt>
              <dd>
                Move cursor to window number <code>N</code>.
              </dd>
              <dd>
                If <code>N</code> &gt; number of windows, go to last window.
              </dd>
            </div>

            <div>
              <dt>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>hjkl</kbd></kbd>
              </dt>
              <dt>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd>
                <kbd>hjkl</kbd>
              </dt>
              <dd>Move cursor to window left/right/above/below current one.</dd>
            </div>

            <div>
              <dt>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>tb</kbd></kbd>
              </dt>
              <dt>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd>
                <kbd>tb</kbd>
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
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>r</kbd></kbd>
              </dt>
              <dt>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd>
                <kbd>r</kbd>
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
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>x</kbd></kbd>
              </dt>
              <dt>
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd>
                <kbd>x</kbd>
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
                <kbd>HJKL</kbd>
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
                <kbd>+-&lt;&gt</kbd>
              </dt>
              <dd>
                Incrementally increase/decrease active window height/width.
              </dd>
            </div>
          </dl>
        </section>
      </section>

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
              <dt><code>&#123;N&#125;</code><kbd>g</kbd><kbd>t</kbd></dt>
              <dd>Switch to tab page number N.</dd>
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
                <code>:tabmove &#123;N&#125;</code>
              </dt>
              <dd>Move current tab page to position N.</dd>
            </div>
          </dl>
        </section>
      </section>
    </section>

    <section class="space-y-2">
      <h3
        id="terminal-mode"
        class="heading-size-3"
      >
        Terminal Mode
      </h3>

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
  </section>

  <section>
    <h2
      id="lua"
      class="heading-size-2"
    >
      Lua
    </h2>
  </section>

  <section class="space-y-2">
    <h2
      id="notes"
      class="heading-size-2"
    >
      Notes
    </h2>

    <p>
      Shortcuts are sometimes written as <code>&lt;C-A&gt;</code> to mean hold
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
      <kbd>:</kbd> to switch to command line mode, where commands can be typed, and
      tab-completion is available.
    </p>

    <div>
      <p>A buffer is the in-memory text of a file.</p>
      <p>A window is a viewport on a buffer.</p>
      <p>A tab page is a collection of windows.</p>
    </div>
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
